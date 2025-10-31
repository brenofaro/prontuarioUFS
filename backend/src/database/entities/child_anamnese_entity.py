from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from src.database.connection import Base

class ChildAnamnese(Base):
    __tablename__ = "child_anamneses"

    id = Column(Integer, primary_key=True, index=True)
    paciente_id = Column(Integer, ForeignKey("pacientes.id"))
    tipo = Column(String, nullable=False)
    nome_da_crianca = Column(String)
    historico_gripe = Column(String)
    habitos = Column(String)
    observacoes = Column(String)

    paciente = relationship("Paciente", back_populates="child_anamneses")
