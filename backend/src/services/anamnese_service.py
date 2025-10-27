from sqlalchemy.orm import Session
from src.database.entities.anamnese_entity import Anamnese
from src.models.anamnese_model import AnamneseCreate

async def cadastrar_anamnese(anamnese: AnamneseCreate, db: Session):
    nova_anamnese = Anamnese(
        paciente_id=anamnese.paciente_id,
        tipo=anamnese.tipo,  # 🔹 novo campo
        queixa_principal=anamnese.queixa_principal,
        historico_doenca=anamnese.historico_doenca,
        habitos=anamnese.habitos,
        observacoes=anamnese.observacoes,
    )
    db.add(nova_anamnese)
    db.commit()
    db.refresh(nova_anamnese)
    return nova_anamnese

async def listar_anamneses(db: Session):
    return db.query(Anamnese).all()

async def buscar_anamnese(id: int, db: Session):
    anamnese = db.query(Anamnese).filter(Anamnese.id == id).first()
    return anamnese

async def atualizar_anamnese(id: int, dados: AnamneseCreate, db: Session):
    anamnese = db.query(Anamnese).filter(Anamnese.id == id).first()
    if not anamnese:
        return None

    anamnese.paciente_id = dados.paciente_id
    anamnese.tipo = dados.tipo  # 🔹 novo campo
    anamnese.queixa_principal = dados.queixa_principal
    anamnese.historico_doenca = dados.historico_doenca
    anamnese.habitos = dados.habitos
    anamnese.observacoes = dados.observacoes

    db.commit()
    db.refresh(anamnese)
    return anamnese

async def deletar_anamnese(anamnese_id: int, db: Session):
    anamnese = db.query(Anamnese).filter(Anamnese.id == anamnese_id).first()
    if anamnese:
        db.delete(anamnese)
        db.commit()
        return True
    return False