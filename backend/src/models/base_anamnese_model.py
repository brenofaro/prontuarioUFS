from pydantic import BaseModel
from datetime import date
from typing import Optional, List
from src.database.entities.enums import (
    EscolaridadeEnum,
    EstadoCivilEnum,
    DenticaoEnum,
    MastigacaoEnum,
    RitmoIntestinal,
    RitmoUrinario,
    ApetiteEnum
)

# ==============================================================
# 🔹 Schema principal de criação
# ==============================================================

class BaseAnamneseCreate(BaseModel):
    paciente_id: int
    tipo_registro: str
    data_consulta: date
    nutricionista_responsavel: str
    numero_prontuario: Optional[int] = None

    # -------------------- Dados Socioeconômicos --------------------
    estado_civil: Optional[EstadoCivilEnum] = None
    escolaridade: Optional[EscolaridadeEnum] = None
    ocupacao: Optional[str] = None
    faz_atividade_dentro_casa: Optional[bool] = False
    atividade_dentro_casa: Optional[str] = None
    pai_mae: Optional[bool] = False
    conjuge: Optional[bool] = False
    filho: Optional[bool] = False
    irmao: Optional[bool] = False
    netos: Optional[bool] = False
    sobrinho: Optional[bool] = False
    cunhado: Optional[bool] = False
    so: Optional[bool] = False
    amigos: Optional[bool] = False
    outros_da_familia: Optional[str] = None
    renda_pessoal: Optional[str] = None
    gastos_alimentacao: Optional[str] = None

    faz_atividade_fisica: Optional[bool] = False
    qual_atividade_fisica: Optional[str] = None
    frequencia_atividade_fisica: Optional[str] = None
    ja_fez_atividade_fisica: Optional[bool] = False
    tempo_parado_atividade_fisica: Optional[str] = None

    tem_etilismo: Optional[bool] = False
    tipo_etilismo: Optional[str] = None
    quanto_etilismo: Optional[str] = None
    ja_foi_etilista: Optional[bool] = False
    tempo_parado_etilismo: Optional[str] = None

    tem_tabagismo: Optional[bool] = False
    tipo_tabagismo: Optional[str] = None
    quanto_tabagismo: Optional[str] = None
    ja_foi_tabagista: Optional[bool] = False
    tempo_parado_tabagismo: Optional[str] = None

    # -------------------- Dados de Saúde --------------------
    objetivo_consulta: Optional[str] = None
    historia_doenca: Optional[str] = None

    diabetes_hma: Optional[bool] = False
    diabetes_hf: Optional[bool] = False
    hipertencao_hma: Optional[bool] = False
    hipertencao_hf: Optional[bool] = False
    doenca_cardiovascular_hma: Optional[bool] = False
    doenca_cardiovascular_hf: Optional[bool] = False
    dislipidemia_hma: Optional[bool] = False
    dislipidemia_hf: Optional[bool] = False
    cancer_hma: Optional[bool] = False
    cancer_hf: Optional[bool] = False
    osteoporose_hma: Optional[bool] = False
    osteoporose_hf: Optional[bool] = False
    depressao_hma: Optional[bool] = False
    depressao_hf: Optional[bool] = False
    sop_hma: Optional[bool] = False
    sop_hf: Optional[bool] = False
    outras_patologias: Optional[str] = None
    faz_uso_medicamentos: Optional[bool] = False
    medicamentos: Optional[str] = None

    # -------------------- Avaliação Antropométrica --------------------
    peso_atual: Optional[str] = None
    peso_usual: Optional[str] = None
    aj: Optional[str] = None
    altura_real: Optional[str] = None
    altura_estimada: Optional[str] = None
    imc: Optional[str] = None
    circunferencia_braco: Optional[str] = None
    circunferencia_pescoco: Optional[str] = None
    pct: Optional[str] = None
    pcb: Optional[str] = None
    pcse: Optional[str] = None
    pcsi: Optional[str] = None
    circunferencia_cintura: Optional[str] = None
    circunferencia_panturrilha: Optional[str] = None
    diagnostico_antropometrico: Optional[str] = None

    # -------------------- Bioimpedância --------------------
    percentual_gordura: Optional[str] = None
    peso_gordura: Optional[str] = None
    massa_magra: Optional[str] = None
    gordura_alvo: Optional[str] = None
    peso_alvo: Optional[str] = None
    tmb: Optional[str] = None
    percentual_agua_massa_magra: Optional[str] = None
    agua_corporal_total: Optional[str] = None

    # -------------------- Dados Clínicos --------------------
    denticao: Optional[DenticaoEnum] = None
    mastigacao: Optional[MastigacaoEnum] = None
    disfagia: Optional[bool] = False
    odinofagia: Optional[bool] = False
    dispepsia: Optional[bool] = False
    nauseas: Optional[bool] = False
    vomitos: Optional[bool] = False
    flatulencia: Optional[bool] = False
    ritmo_intestinal: Optional[RitmoIntestinal] = None
    ritmo_urinario: Optional[RitmoUrinario] = None
    pele: Optional[str] = None
    unhas: Optional[str] = None
    cabelo: Optional[str] = None
    mucosas: Optional[str] = None
    edemas: Optional[str] = None
    abdomen: Optional[str] = None

    # -------------------- Avaliação Bioquímica --------------------
    data_ab: Optional[date] = None
    avaliacao_bioquimica: Optional[str] = None

    # -------------------- História Alimentar --------------------
    possui_aversoes_alimentares: Optional[bool] = False
    aversoes_alimentares: Optional[str] = None
    possui_alergias_alimentares: Optional[bool] = False
    alergias_alimentares: Optional[str] = None
    ingestao_hidrica: Optional[str] = None
    existe_horario_mais_fome: Optional[bool] = False
    horario_mais_fome: Optional[str] = None
    apetite: Optional[ApetiteEnum] = None

    # -------------------- Diagnóstico Conclusivo --------------------
    diagnostico_conclusivo: Optional[str] = None


# ==============================================================
# 🔹 Schema de resposta
# ==============================================================

class BaseAnamneseResponse(BaseAnamneseCreate):
    id: int

    class Config:
        orm_mode = True
