from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class ChildAnamneseCreate(BaseModel):
    paciente_id: int
    tipo: str                    # 🔹 novo campo
    nome_da_crianca: str
    historico_gripe: Optional[str] = None
    habitos: Optional[str] = None
    observacoes: Optional[str] = None

class ChildAnamneseResponse(ChildAnamneseCreate):
    id: int

    class Config:
        orm_mode = True
