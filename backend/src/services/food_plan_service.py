from sqlalchemy.orm import Session
from src.database.entities.food_plan_entity import FoodPlan
from src.models.food_plan_model import FoodPlanCreate


# CREATE
async def cadastrar_food_plan(plan: FoodPlanCreate, db: Session):
    novo_plan = FoodPlan(**plan.model_dump(exclude_unset=True))
    db.add(novo_plan)
    db.commit()
    db.refresh(novo_plan)
    return novo_plan


# READ — listar todos
async def listar_food_plans(db: Session):
    return db.query(FoodPlan).all()


# READ — buscar por ID
async def buscar_food_plan(id: int, db: Session):
    return db.query(FoodPlan).filter(FoodPlan.id == id).first()


# READ — buscar por paciente_id
async def buscar_food_plans_por_paciente(paciente_id: int, db: Session):
    return db.query(FoodPlan).filter(FoodPlan.paciente_id == paciente_id).all()


# UPDATE
async def atualizar_food_plan(id: int, dados: FoodPlanCreate, db: Session):
    plano = db.query(FoodPlan).filter(FoodPlan.id == id).first()
    if not plano:
        return None

    for key, value in dados.model_dump(exclude_unset=True).items():
        setattr(plano, key, value)

    db.commit()
    db.refresh(plano)
    return plano


# DELETE
async def deletar_food_plan(id: int, db: Session):
    plano = db.query(FoodPlan).filter(FoodPlan.id == id).first()
    if plano:
        db.delete(plano)
        db.commit()
        return True
    return False
