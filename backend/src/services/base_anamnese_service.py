from sqlalchemy.orm import Session
from src.database.entities.base_anamnese_entity import BaseAnamnese
from src.models.base_anamnese_model import BaseAnamneseCreate

# CREATE
async def cadastrar_base_anamnese(anamnese: BaseAnamneseCreate, db: Session):
    nova_anamnese = BaseAnamnese(**anamnese.model_dump(exclude_unset=True))
    db.add(nova_anamnese)
    db.commit()
    db.refresh(nova_anamnese)
    return nova_anamnese


# READ - listar todos
async def listar_base_anamneses(db: Session):
    return db.query(BaseAnamnese).all()


# READ - buscar por ID
async def buscar_base_anamnese(id: int, db: Session):
    anamnese = db.query(BaseAnamnese).filter(BaseAnamnese.id == id).first()
    return anamnese


# UPDATE
async def atualizar_base_anamnese(id: int, dados: BaseAnamneseCreate, db: Session):
    anamnese = db.query(BaseAnamnese).filter(BaseAnamnese.id == id).first()
    if not anamnese:
        return None

    for key, value in dados.model_dump(exclude_unset=True).items():
        setattr(anamnese, key, value)
        
    db.commit()
    db.refresh(anamnese)
    return anamnese


# DELETE
async def deletar_base_anamnese(id: int, db: Session):
    anamnese = db.query(BaseAnamnese).filter(BaseAnamnese.id == id).first()
    if anamnese:
        db.delete(anamnese)
        db.commit()
        return True
    return False

# READ - buscar por paciente_id
async def buscar_base_anamneses_por_paciente(paciente_id: int, db: Session):
    anamneses = db.query(BaseAnamnese).filter(BaseAnamnese.paciente_id == paciente_id).all()
    return anamneses
