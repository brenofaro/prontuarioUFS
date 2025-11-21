from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from src.models.paciente_model import PacienteCreate, PacienteResponse
from src.services.paciente_service import (
        cadastrar_paciente, 
        deletar_paciente, 
        listar_pacientes, 
        buscar_paciente, 
        atualizar_paciente,
        buscar_paciente_por_nome
    )
from src.database.connection import get_db

router = APIRouter(prefix="/pacientes", tags=["Pacientes"])

#CREATE
@router.post("/cadastrar", response_model=PacienteResponse)
async def cadastrar(paciente: PacienteCreate, db: Session = Depends(get_db)):
    try:
        return await cadastrar_paciente(paciente, db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

#DELETE
@router.delete("/{id}")
async def deletar(id: int, db: Session = Depends(get_db)):
    sucesso = await deletar_paciente(id, db)
    if not sucesso:
        raise HTTPException(status_code=404, detail="Paciente não encontrado")
    return {"message": "Paciente excluído com sucesso"}


# READ - listar todos
@router.get("/", response_model=list[PacienteResponse])
async def listar(db: Session = Depends(get_db)):
    pacientes = await listar_pacientes(db)
    return pacientes


# READ - buscar por id
@router.get("/{id}", response_model=PacienteResponse)
async def buscar(id: int, db: Session = Depends(get_db)):
    paciente = await buscar_paciente(id, db)
    if not paciente:
        raise HTTPException(status_code=404, detail="Paciente não encontrado")
    return paciente


# UPDATE
@router.put("/{id}", response_model=PacienteResponse)
async def atualizar(id: int, paciente: PacienteCreate, db: Session = Depends(get_db)):
    atualizado = await atualizar_paciente(id, paciente, db)
    if not atualizado:
        raise HTTPException(status_code=404, detail="Paciente não encontrado")
    return atualizado

# 🔍 NOVA ROTA - buscar por nome 
@router.get("/buscar/", response_model=list[PacienteResponse])
async def buscar_por_nome(
    nome: str | None = Query(None, description="Nome (ou parte dele) do paciente"),
    db: Session = Depends(get_db),
):
    if not nome :
        raise HTTPException(status_code=400, detail="Informe nome para busca")

    pacientes = await buscar_paciente_por_nome(nome, db)
    if not pacientes:
        raise HTTPException(status_code=404, detail="Nenhum paciente encontrado")
    return pacientes