from sqlalchemy.orm import Session
from src.database.entities.child_anamnese_entity import ChildAnamnese
from src.models.child_anamnese_model import ChildAnamneseCreate


# CREATE
async def cadastrar_child_anamnese(anamnese: ChildAnamneseCreate, db: Session):
    nova_anamnese = ChildAnamnese(
        **anamnese.model_dump(exclude_unset=True)
    )
    db.add(nova_anamnese)
    db.commit()
    db.refresh(nova_anamnese)
    return nova_anamnese


# READ - listar todos
async def listar_child_anamneses(db: Session):
    return db.query(ChildAnamnese).all()


# READ - buscar por ID
async def buscar_child_anamnese(id: int, db: Session):
    anamnese = db.query(ChildAnamnese).filter(ChildAnamnese.id == id).first()
    return anamnese


# UPDATE
async def atualizar_child_anamnese(id: int, dados: ChildAnamneseCreate, db: Session):
    anamnese = db.query(ChildAnamnese).filter(ChildAnamnese.id == id).first()

    if not anamnese:
        return None

    for key, value in dados.model_dump(exclude_unset=True).items():
        setattr(anamnese, key, value)

    db.commit()
    db.refresh(anamnese)
    return anamnese


# DELETE
async def deletar_child_anamnese(id: int, db: Session):
    anamnese = db.query(ChildAnamnese).filter(ChildAnamnese.id == id).first()
    if anamnese:
        db.delete(anamnese)
        db.commit()
        return True
    return False


# READ - buscar por paciente_id
async def buscar_child_anamneses_por_paciente(paciente_id: int, db: Session):
    anamneses = (
        db.query(ChildAnamnese)
        .filter(ChildAnamnese.paciente_id == paciente_id)
        .all()
    )
    return anamneses
