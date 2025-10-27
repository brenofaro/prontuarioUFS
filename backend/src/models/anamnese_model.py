from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class AnamneseCreate(BaseModel):
    paciente_id: int
    tipo: str                    # 🔹 novo campo
    queixa_principal: str
    historico_doenca: Optional[str] = None
    habitos: Optional[str] = None
    observacoes: Optional[str] = None

class AnamneseResponse(AnamneseCreate):
    id: int

    class Config:
        orm_mode = True
