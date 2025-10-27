from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from src.models.anamnese_model import AnamneseCreate, AnamneseResponse
from src.services.anamnese_service import (
        cadastrar_anamnese,
        listar_anamneses,
        buscar_anamnese,
        atualizar_anamnese,
        deletar_anamnese
    )
from src.database.connection import get_db

router = APIRouter(prefix="/anamneses", tags=["Anamneses"])

#CREATE
@router.post("/cadastrar", response_model=AnamneseResponse)
async def cadastrar(anamnese: AnamneseCreate, db: Session = Depends(get_db)):
    try:
        return await cadastrar_anamnese(anamnese, db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# READ - listar todos
@router.get("/", response_model=list[AnamneseResponse])
async def listar(db: Session = Depends(get_db)):
    anamneses = await listar_anamneses(db)
    return anamneses

# READ - buscar por id
@router.get("/{id}", response_model=AnamneseResponse)
async def buscar(id: int, db: Session = Depends(get_db)):
    anamnese = await buscar_anamnese(id, db)
    if not anamnese:
        raise HTTPException(status_code=404, detail="Anamnese não encontrada")
    return anamnese

# UPDATE
@router.put("/{id}", response_model=AnamneseResponse)
async def atualizar(id: int, anamnese: AnamneseCreate, db: Session = Depends(get_db)):
    atualizado = await atualizar_anamnese(id, anamnese, db)
    if not atualizado:
        raise HTTPException(status_code=404, detail="Anamnese não encontrada")
    return atualizado

#DELETE
@router.delete("/{id}")
async def deletar(id: int, db: Session = Depends(get_db)):  
    sucesso = await deletar_anamnese(id, db)
    if not sucesso:
        raise HTTPException(status_code=404, detail="Anamnese não encontrada")
    return {"message": "Anamnese excluída com sucesso"}
