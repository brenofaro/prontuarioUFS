from pydantic import BaseModel
from datetime import date
from typing import Optional

# Schema usado para CADASTRAR um novo paciente
class PacienteCreate(BaseModel):
    nome: str
    cpf: str
    data_nascimento: Optional[date] = None
    telefone: Optional[str] = None
    endereco: Optional[str] = None


# Schema usado para RETORNAR o paciente após o cadastro
class PacienteResponse(PacienteCreate):
    id: int  # vem do banco após salvar

    class Config:
        orm_mode = True  # permite converter automaticamente objetos ORM → JSON
