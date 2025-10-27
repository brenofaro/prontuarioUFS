from sqlalchemy.orm import Session
from src.database.entities.paciente_entity import Paciente
from src.models.paciente_model import PacienteCreate

async def cadastrar_paciente(paciente: PacienteCreate, db: Session):
    try:
        novo_paciente = Paciente(
            nome=paciente.nome,
            cpf=paciente.cpf,
            data_nascimento=paciente.data_nascimento,
            telefone=paciente.telefone,
            endereco=paciente.endereco
        )
        db.add(novo_paciente)
        db.commit()
        db.refresh(novo_paciente)
        return novo_paciente
    except Exception as e:
        db.rollback()  # desfaz transação se der erro
        raise e

