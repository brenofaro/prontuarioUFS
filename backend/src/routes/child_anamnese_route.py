from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from src.models.child_anamnese_model import ChildAnamneseCreate, ChildAnamneseResponse
from src.services.child_anamnese_service import (
        cadastrar_child_anamnese,
        listar_child_anamneses,
        buscar_child_anamnese,      
        atualizar_child_anamnese,
        deletar_child_anamnese,
        buscar_child_anamneses_por_paciente
    )
from src.database.connection import get_db

router = APIRouter(prefix="/child-anamneses", tags=["ChildAnamneses"])  

#CREATE
@router.post("/cadastrar", response_model=ChildAnamneseResponse)
async def cadastrar(anamnese: ChildAnamneseCreate, db: Session = Depends(get_db)):
    try:
        return await cadastrar_child_anamnese(anamnese, db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 
    
# READ - listar todos
@router.get("/", response_model=list[ChildAnamneseResponse])
async def listar(db: Session = Depends(get_db)):
    anamneses = await listar_child_anamneses(db)
    return anamneses    

# READ - buscar por id
@router.get("/{id}", response_model=ChildAnamneseResponse)
async def buscar(id: int, db: Session = Depends(get_db)):
    anamnese = await buscar_child_anamnese(id, db)
    if not anamnese:
        raise HTTPException(status_code=404, detail="Anamnese não encontrada")
    return anamnese

# UPDATE
@router.put("/{id}", response_model=ChildAnamneseResponse)
async def atualizar(id: int, anamnese: ChildAnamneseCreate, db: Session = Depends(get_db)):
    atualizado = await atualizar_child_anamnese(id, anamnese, db)
    if not atualizado:
        raise HTTPException(status_code=404, detail="Anamnese não encontrada")
    return atualizado

#DELETE
@router.delete("/{id}")
async def deletar(id: int, db: Session = Depends(get_db)):  
    sucesso = await deletar_child_anamnese(id, db)
    if not sucesso:
        raise HTTPException(status_code=404, detail="Anamnese não encontrada")
    return {"message": "Anamnese excluída com sucesso"}

# READ - buscar por paciente_id
@router.get("/paciente/{paciente_id}", response_model=list[ChildAnamneseResponse])
async def buscar_por_paciente(paciente_id: int, db: Session = Depends(get_db)):
    anamneses = await buscar_child_anamneses_por_paciente(paciente_id, db)
    return anamneses    

