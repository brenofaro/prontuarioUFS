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
    data_consulta: date
    numero_prontuario: str
    nutricionista_responsavel: str

    # -------------------- Dados Socioeconômicos --------------------
    estado_civil: Optional[EstadoCivilEnum] = None
    escolaridade: Optional[EscolaridadeEnum] = None
    ocupacao: Optional[str] = None
    faz_atividade_dentro_casa: Optional[bool] = False
    atividade_dentro_casa: Optional[str] = None
    estrutura_familia: Optional[List[str]] = None
    renda_pessoal: Optional[float] = None
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

    hipertencao_hma: Optional[bool] = None
    hipertencao_hf: Optional[bool] = False
    diabetes_hma: Optional[bool] = None
    diabetes_hf: Optional[bool] = False
    doenca_cardiovascular_hma: Optional[bool] = None
    doenca_cardiovascular_hf: Optional[bool] = False
    dislipidemia_hma: Optional[bool] = None
    dislipidemia_hf: Optional[bool] = False
    cancer_hma: Optional[bool] = None
    cancer_hf: Optional[bool] = False
    osteoporose_hma: Optional[bool] = None
    osteoporose_hf: Optional[bool] = False
    depressao_hma: Optional[bool] = None
    depressao_hf: Optional[bool] = False
    sop_hma: Optional[bool] = None
    sop_hf: Optional[bool] = False
    outras_patologias: Optional[str] = None
    faz_uso_medicamentos: Optional[bool] = False
    medicamentos: Optional[str] = None

    # -------------------- Avaliação Antropométrica --------------------
    peso_atual: Optional[float] = None
    peso_usual: Optional[float] = None
    aj: Optional[float] = None
    altura_real: Optional[float] = None
    altura_estimada: Optional[float] = None
    imc: Optional[float] = None
    circunferencia_braco: Optional[float] = None
    circunferencia_pescoco: Optional[float] = None
    pct: Optional[float] = None
    pcb: Optional[float] = None
    pcse: Optional[float] = None
    pcsi: Optional[float] = None
    circunferencia_cintura: Optional[float] = None
    circunferencia_panturrilha: Optional[float] = None
    diagnostico_antropometrico: Optional[str] = None

    # -------------------- Bioimpedância --------------------
    percentual_gordura: Optional[float] = None
    peso_gordura: Optional[float] = None
    massa_magra: Optional[float] = None
    gordura_alvo: Optional[float] = None
    peso_alvo: Optional[float] = None
    tmb: Optional[float] = None
    percentual_agua_massa_magra: Optional[float] = None
    agua_corporal_total: Optional[float] = None

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
