from sqlalchemy.orm import Session
from src.database.entities.paciente_entity import Paciente
from src.models.paciente_model import PacienteCreate
from sqlalchemy import select


async def cadastrar_paciente(paciente: PacienteCreate, db: Session):
    try:
        novo_paciente = Paciente(
            nome=paciente.nome,
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

async def deletar_paciente(paciente_id: int, db: Session):
    paciente = db.query(Paciente).filter(Paciente.id == paciente_id).first()
    if paciente:
        db.delete(paciente)
        db.commit()
        return True
    return False

# READ (listar todos)
async def listar_pacientes(db: Session):
    return db.query(Paciente).all()

# READ (buscar por id)
async def buscar_paciente(id: int, db: Session):
    paciente = db.query(Paciente).filter(Paciente.id == id).first()
    return paciente

#READ (buscar por nome)
async def buscar_paciente_por_nome(nome: str | None, db: Session):
    query = select(Paciente)

    if nome:
        query = query.filter(Paciente.nome.ilike(f"%{nome}%"))

    result = db.execute(query).scalars().all()
    return result

# UPDATE
async def atualizar_paciente(id: int, dados: PacienteCreate, db: Session):
    paciente = db.query(Paciente).filter(Paciente.id == id).first()
    if not paciente:
        return None

    paciente.nome = dados.nome
    paciente.data_nascimento = dados.data_nascimento
    paciente.telefone = dados.telefone
    paciente.endereco = dados.endereco

    db.commit()
    db.refresh(paciente)
    return paciente