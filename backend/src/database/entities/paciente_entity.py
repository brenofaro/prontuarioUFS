from sqlalchemy import Column, Integer, String, Date
from src.database.connection import Base

class Paciente(Base):
    __tablename__ = "pacientes"  # nome da tabela no banco

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable=False)
    cpf = Column(String, unique=True, nullable=False)
    data_nascimento = Column(Date)
    telefone = Column(String)
    endereco = Column(String)
