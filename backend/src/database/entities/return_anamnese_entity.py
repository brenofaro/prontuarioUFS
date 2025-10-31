# from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
# from sqlalchemy.orm import relationship
# from src.database.connection import Base
# import datetime

# class ReturnAnamnese(Base):
#     __tablename__ = "return_anamneses"

#     id = Column(Integer, primary_key=True, index=True)
#     paciente_id = Column(Integer, ForeignKey("pacientes.id"))
#     tipo = Column(String, default="retorno", nullable=False)
#     data_consulta = Column(DateTime, default=datetime.datetime.utcnow)

#     # FK opcional — aponta para a anamnese original (pode ser BaseAnamnese ou ChildAnamnese)
#     anamnese_referencia_id = Column(Integer, nullable=True)
#     anamnese_referencia_tipo = Column(String, nullable=True)  # "base" ou "child"

#     observacoes = Column(String)

#     paciente = relationship("Paciente", back_populates="return_anamneses")
