from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from src.models.return_anamnese_model import (
    ReturnAnamneseCreate,
    ReturnAnamneseResponse
)

from src.services.return_anamnese_service import (
    cadastrar_return_anamnese,
    listar_return_anamneses,
    buscar_return_anamnese,
    atualizar_return_anamnese,
    deletar_return_anamnese,
    buscar_return_anamneses_por_paciente
)

from src.database.connection import get_db

router = APIRouter(prefix="/return-anamneses", tags=["ReturnAnamneses"])


# ---------------------------------------------------------
# CREATE
# ---------------------------------------------------------
@router.post("/cadastrar", response_model=ReturnAnamneseResponse)
async def cadastrar(anamnese: ReturnAnamneseCreate, db: Session = Depends(get_db)):
    try:
        return await cadastrar_return_anamnese(anamnese, db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ---------------------------------------------------------
# READ - listar todos
# ---------------------------------------------------------
@router.get("/", response_model=list[ReturnAnamneseResponse])
async def listar(db: Session = Depends(get_db)):
    anamneses = await listar_return_anamneses(db)
    return anamneses


# ---------------------------------------------------------
# READ - buscar por id
# ---------------------------------------------------------
@router.get("/{id}", response_model=ReturnAnamneseResponse)
async def buscar(id: int, db: Session = Depends(get_db)):
    anamnese = await buscar_return_anamnese(id, db)
    if not anamnese:
        raise HTTPException(status_code=404, detail="Anamnese não encontrada")
    return anamnese


# ---------------------------------------------------------
# READ - buscar por paciente_id
# ---------------------------------------------------------
@router.get("/paciente/{paciente_id}", response_model=list[ReturnAnamneseResponse])
async def buscar_por_paciente(paciente_id: int, db: Session = Depends(get_db)):
    anamneses = await buscar_return_anamneses_por_paciente(paciente_id, db)
    return anamneses


# ---------------------------------------------------------
# UPDATE
# ---------------------------------------------------------
@router.put("/{id}", response_model=ReturnAnamneseResponse)
async def atualizar(id: int, anamnese: ReturnAnamneseCreate, db: Session = Depends(get_db)):
    atualizado = await atualizar_return_anamnese(id, anamnese, db)
    if not atualizado:
        raise HTTPException(status_code=404, detail="Anamnese não encontrada")
    return atualizado


# ---------------------------------------------------------
# DELETE
# ---------------------------------------------------------
@router.delete("/{id}")
async def deletar(id: int, db: Session = Depends(get_db)):
    sucesso = await deletar_return_anamnese(id, db)
    if not sucesso:
        raise HTTPException(status_code=404, detail="Anamnese não encontrada")
    return {"message": "Anamnese excluída com sucesso"}
