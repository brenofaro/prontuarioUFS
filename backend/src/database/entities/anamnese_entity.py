from sqlalchemy import Column, Integer, String, Date, ForeignKey, DateTime
from src.database.connection import Base
import datetime 
from sqlalchemy.orm import relationship

class Anamnese(Base):
    __tablename__ = "anamneses"

    id = Column(Integer, primary_key=True, index=True)
    paciente_id = Column(Integer, ForeignKey("pacientes.id"))
    tipo = Column(String, nullable=False)
    queixa_principal = Column(String)
    historico_doenca = Column(String)
    habitos = Column(String)
    observacoes = Column(String)

    paciente = relationship("Paciente", back_populates="anamneses")