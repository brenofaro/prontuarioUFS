from sqlalchemy.orm import Session
from src.database.entities.child_anamnese_entity import ChildAnamnese
from src.models.child_anamnese_model import ChildAnamneseCreate

async def cadastrar_child_anamnese(anamnese: ChildAnamneseCreate, db: Session):
    nova_child_anamnese = ChildAnamnese(
        paciente_id=anamnese.paciente_id,
        tipo=anamnese.tipo,  # 🔹 novo campo
        nome_da_crianca=anamnese.nome_da_crianca,
        historico_gripe=anamnese.historico_gripe,
        habitos=anamnese.habitos,
        observacoes=anamnese.observacoes,
    )
    db.add(nova_child_anamnese)
    db.commit()
    db.refresh(nova_child_anamnese)
    return nova_child_anamnese

async def listar_child_anamneses(db: Session):
    return db.query(ChildAnamnese).all()    

async def buscar_child_anamnese(id: int, db: Session):
    child_anamnese = db.query(ChildAnamnese).filter(ChildAnamnese.id == id).first()
    return child_anamnese

async def atualizar_child_anamnese(id: int, dados: ChildAnamneseCreate, db: Session):
    child_anamnese = db.query(ChildAnamnese).filter(ChildAnamnese.id == id).first()
    if not child_anamnese:
        return None

    child_anamnese.paciente_id = dados.paciente_id
    child_anamnese.tipo = dados.tipo  # 🔹 novo campo
    child_anamnese.nome_da_crianca = dados.nome_da_crianca
    child_anamnese.historico_gripe = dados.historico_gripe
    child_anamnese.habitos = dados.habitos
    child_anamnese.observacoes = dados.observacoes

    db.commit()
    db.refresh(child_anamnese)
    return child_anamnese

async def deletar_child_anamnese(child_anamnese_id: int, db: Session):
    child_anamnese = db.query(ChildAnamnese).filter(ChildAnamnese.id == child_anamnese_id).first()
    if child_anamnese:
        db.delete(child_anamnese)
        db.commit()
        return True
    return False
