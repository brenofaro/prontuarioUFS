from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from src.models.base_anamnese_model import BaseAnamneseCreate, BaseAnamneseResponse
from src.services.base_anamnese_service import (
        cadastrar_base_anamnese,
        listar_base_anamneses,
        buscar_base_anamnese,
        atualizar_base_anamnese,
        deletar_base_anamnese,
        buscar_base_anamneses_por_paciente

    )
from src.database.connection import get_db

router = APIRouter(prefix="/base-anamneses", tags=["BaseAnamneses"])

#CREATE
@router.post("/cadastrar", response_model=BaseAnamneseResponse)
async def cadastrar(anamnese: BaseAnamneseCreate, db: Session = Depends(get_db)):
    try:
        return await cadastrar_base_anamnese(anamnese, db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# READ - listar todos
@router.get("/", response_model=list[BaseAnamneseResponse])
async def listar(db: Session = Depends(get_db)):
    anamneses = await listar_base_anamneses(db)
    return anamneses

# READ - buscar por id
@router.get("/{id}", response_model=BaseAnamneseResponse)
async def buscar(id: int, db: Session = Depends(get_db)):
    anamnese = await buscar_base_anamnese(id, db)
    if not anamnese:
        raise HTTPException(status_code=404, detail="Anamnese não encontrada")
    return anamnese

#READ - buscar por paciente_id
@router.get("/paciente/{paciente_id}", response_model=list[BaseAnamneseResponse])
async def buscar_por_paciente(paciente_id: int, db: Session = Depends(get_db)):
    anamnese = await buscar_base_anamneses_por_paciente(paciente_id, db)
    return anamnese

# UPDATE
@router.put("/{id}", response_model=BaseAnamneseResponse)
async def atualizar(id: int, anamnese: BaseAnamneseCreate, db: Session = Depends(get_db)):
    atualizado = await atualizar_base_anamnese(id, anamnese, db)
    if not atualizado:
        raise HTTPException(status_code=404, detail="Anamnese não encontrada")
    return atualizado

#DELETE
@router.delete("/{id}")
async def deletar(id: int, db: Session = Depends(get_db)):  
    sucesso = await deletar_base_anamnese(id, db)
    if not sucesso:
        raise HTTPException(status_code=404, detail="Anamnese não encontrada")
    return {"message": "Anamnese excluída com sucesso"}
