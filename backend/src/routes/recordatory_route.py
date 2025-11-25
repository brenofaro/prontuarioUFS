from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session

from src.models.recordatory_model import (
    RecordatoryCreate,
    RecordatoryResponse,
)
from src.services.recordatory_service import (
    cadastrar_recordatorio,
    listar_recordatorios,
    buscar_recordatorio,
    atualizar_recordatorio,
    deletar_recordatorio,
    buscar_recordatorios_por_paciente
)
from src.database.connection import get_db


router = APIRouter(prefix="/recordatorys", tags=["Recordatorys"])


# CREATE
@router.post("/cadastrar", response_model=RecordatoryResponse)
async def cadastrar(recordatorio: RecordatoryCreate, db: Session = Depends(get_db)):
    try:
        return await cadastrar_recordatorio(recordatorio, db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# READ - listar todos
@router.get("/", response_model=list[RecordatoryResponse])
async def listar(db: Session = Depends(get_db)):
    return await listar_recordatorios(db)


# READ - buscar por id
@router.get("/{id}", response_model=RecordatoryResponse)
async def buscar(id: int, db: Session = Depends(get_db)):
    dado = await buscar_recordatorio(id, db)
    if not dado:
        raise HTTPException(status_code=404, detail="Recordatório não encontrado")
    return dado


# READ - buscar por paciente_id
@router.get("/paciente/{paciente_id}", response_model=list[RecordatoryResponse])
async def buscar_por_paciente(paciente_id: int, db: Session = Depends(get_db)):
    return await buscar_recordatorios_por_paciente(paciente_id, db)


# UPDATE
@router.put("/{id}", response_model=RecordatoryResponse)
async def atualizar(id: int, dados: RecordatoryCreate, db: Session = Depends(get_db)):
    atualizado = await atualizar_recordatorio(id, dados, db)
    if not atualizado:
        raise HTTPException(status_code=404, detail="Recordatório não encontrado")
    return atualizado


# DELETE
@router.delete("/{id}")
async def deletar(id: int, db: Session = Depends(get_db)):
    sucesso = await deletar_recordatorio(id, db)
    if not sucesso:
        raise HTTPException(status_code=404, detail="Recordatório não encontrado")
    return {"message": "Recordatório excluído com sucesso"}
