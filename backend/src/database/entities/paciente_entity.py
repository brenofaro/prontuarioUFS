from sqlalchemy import Column, Integer, String, Date
from src.database.connection import Base
from sqlalchemy.orm import relationship

class Paciente(Base):
    __tablename__ = "pacientes"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable=False)
    cpf = Column(String, unique=True, nullable=False)
    data_nascimento = Column(Date)
    telefone = Column(String)
    endereco = Column(String)

    base_anamneses = relationship("BaseAnamnese", back_populates="paciente", cascade="all, delete")
    child_anamneses = relationship("ChildAnamnese", back_populates="paciente", cascade="all, delete")
    #return_anamneses = relationship("ReturnAnamnese", back_populates="paciente", cascade="all, delete")
