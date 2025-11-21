from sqlalchemy.orm import Session
from src.database.entities.return_anamnese_entity import ReturnAnamnese
from src.models.return_anamnese_model import ReturnAnamneseCreate


# CREATE
async def cadastrar_return_anamnese(anamnese: ReturnAnamneseCreate, db: Session):
    nova_anamnese = ReturnAnamnese(**anamnese.model_dump(exclude_unset=True))
    db.add(nova_anamnese)
    db.commit()
    db.refresh(nova_anamnese)
    return nova_anamnese


# READ - listar todos
async def listar_return_anamneses(db: Session):
    return db.query(ReturnAnamnese).all()


# READ - buscar por ID
async def buscar_return_anamnese(id: int, db: Session):
    anamnese = db.query(ReturnAnamnese).filter(ReturnAnamnese.id == id).first()
    return anamnese


# UPDATE
async def atualizar_return_anamnese(id: int, dados: ReturnAnamneseCreate, db: Session):
    anamnese = db.query(ReturnAnamnese).filter(ReturnAnamnese.id == id).first()
    if not anamnese:
        return None

    for key, value in dados.model_dump(exclude_unset=True).items():
        setattr(anamnese, key, value)

    db.commit()
    db.refresh(anamnese)
    return anamnese


# DELETE
async def deletar_return_anamnese(id: int, db: Session):
    anamnese = db.query(ReturnAnamnese).filter(ReturnAnamnese.id == id).first()
    if anamnese:
        db.delete(anamnese)
        db.commit()
        return True
    return False


# READ - buscar por paciente_id
async def buscar_return_anamneses_por_paciente(paciente_id: int, db: Session):
    anamneses = (
        db.query(ReturnAnamnese)
        .filter(ReturnAnamnese.paciente_id == paciente_id)
        .all()
    )
    return anamneses
