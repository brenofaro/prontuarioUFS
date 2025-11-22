from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session

from src.models.food_plan_model import FoodPlanCreate, FoodPlanResponse
from src.services.food_plan_service import (
    cadastrar_food_plan,
    listar_food_plans,
    buscar_food_plan,
    atualizar_food_plan,
    deletar_food_plan,
    buscar_food_plans_por_paciente
)
from src.database.connection import get_db
from src.utils.food_plan_pdf import gerar_pdf_food_plan


router = APIRouter(prefix="/food-plans", tags=["FoodPlans"])


# CREATE
@router.post("/cadastrar", response_model=FoodPlanResponse)
async def cadastrar(plan: FoodPlanCreate, db: Session = Depends(get_db)):
    try:
        return await cadastrar_food_plan(plan, db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# READ - listar todos
@router.get("/", response_model=list[FoodPlanResponse])
async def listar(db: Session = Depends(get_db)):
    return await listar_food_plans(db)


# READ - buscar por id
@router.get("/{id}", response_model=FoodPlanResponse)
async def buscar(id: int, db: Session = Depends(get_db)):
    plano = await buscar_food_plan(id, db)
    if not plano:
        raise HTTPException(status_code=404, detail="Plano alimentar não encontrado")
    return plano


# READ - buscar por paciente_id
@router.get("/paciente/{paciente_id}", response_model=list[FoodPlanResponse])
async def buscar_por_paciente(paciente_id: int, db: Session = Depends(get_db)):
    return await buscar_food_plans_por_paciente(paciente_id, db)


# UPDATE
@router.put("/{id}", response_model=FoodPlanResponse)
async def atualizar(id: int, plano: FoodPlanCreate, db: Session = Depends(get_db)):
    atualizado = await atualizar_food_plan(id, plano, db)
    if not atualizado:
        raise HTTPException(status_code=404, detail="Plano alimentar não encontrado")
    return atualizado


# DELETE
@router.delete("/{id}")
async def deletar(id: int, db: Session = Depends(get_db)):
    sucesso = await deletar_food_plan(id, db)
    if not sucesso:
        raise HTTPException(status_code=404, detail="Plano alimentar não encontrado")
    return {"message": "Plano alimentar excluído com sucesso"}


# GERAR PDF
@router.get("/{id}/pdf")
async def gerar_pdf(id: int, db: Session = Depends(get_db)):
    plano = await buscar_food_plan(id, db)

    if not plano:
        raise HTTPException(status_code=404, detail="Plano alimentar não encontrado")

    # Converter para dict
    plano_dict = plano.__dict__.copy()
    plano_dict.pop("_sa_instance_state", None)

    # Gerar PDF
    buffer = gerar_pdf_food_plan(plano_dict)

    # Enviar arquivo
    return Response(
        content=buffer.getvalue(),
        media_type="application/pdf",
        headers={
            "Content-Disposition": f"attachment; filename=plano_{id}.pdf"
        }
    )
