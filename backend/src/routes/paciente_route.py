from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from src.models.paciente_model import PacienteCreate, PacienteResponse
from src.services.paciente_service import cadastrar_paciente
from src.database.connection import get_db

router = APIRouter(prefix="/pacientes", tags=["Pacientes"])

@router.post("/cadastrar", response_model=PacienteResponse)
async def cadastrar(paciente: PacienteCreate, db: Session = Depends(get_db)):
    try:
        return await cadastrar_paciente(paciente, db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
