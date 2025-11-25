from sqlalchemy.orm import Session
from src.database.entities.recordatory_entity import Recordatory
from src.models.recordatory_model import RecordatoryCreate


# CREATE
async def cadastrar_recordatorio(recordatorio: RecordatoryCreate, db: Session):
    novo = Recordatory(**recordatorio.model_dump(exclude_unset=True))
    db.add(novo)
    db.commit()
    db.refresh(novo)
    return novo


# READ — listar todos
async def listar_recordatorios(db: Session):
    return db.query(Recordatory).all()


# READ — buscar por ID
async def buscar_recordatorio(id: int, db: Session):
    return db.query(Recordatory).filter(Recordatory.id == id).first()


# READ — buscar por paciente_id
async def buscar_recordatorios_por_paciente(paciente_id: int, db: Session):
    return db.query(Recordatory).filter(Recordatory.paciente_id == paciente_id).all()


# UPDATE
async def atualizar_recordatorio(id: int, dados: RecordatoryCreate, db: Session):
    registro = db.query(Recordatory).filter(Recordatory.id == id).first()
    if not registro:
        return None

    # Atualiza somente os campos enviados
    for key, value in dados.model_dump(exclude_unset=True).items():
        setattr(registro, key, value)

    db.commit()
    db.refresh(registro)
    return registro


# DELETE
async def deletar_recordatorio(id: int, db: Session):
    registro = db.query(Recordatory).filter(Recordatory.id == id).first()
    if registro:
        db.delete(registro)
        db.commit()
        return True
    return False
