from src.database.entities.base_anamnese_entity import (
    BaseAnamneseCreate
)

def flatten(data: BaseAnamneseCreate) -> dict:
    """
    Recebe o objeto Pydantic BaseAnamneseCreate (aninhado por seções)
    e converte em um dicionário plano, compatível com o modelo SQLAlchemy.
    """

    return {
        # Campo raiz
        "paciente_id": data.paciente_id,

        # Seções
        **data.inicio.dict(),
        **data.socioeconomico.dict(),
        **data.saude.dict(),
        **data.antropometria.dict(),
        **data.bioimpedancia.dict(),
        **data.clinico.dict(),
        **data.historia_alimentar.dict(),
    }
