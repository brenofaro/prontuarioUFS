from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class BaseAnamneseCreate(BaseModel):
    paciente_id: int
    tipo: str                    # 🔹 novo campo
    queixa_principal: str
    historico_doenca: Optional[str] = None
    habitos: Optional[str] = None
    observacoes: Optional[str] = None

class BaseAnamneseResponse(BaseAnamneseCreate):
    id: int

    class Config:
        orm_mode = True
