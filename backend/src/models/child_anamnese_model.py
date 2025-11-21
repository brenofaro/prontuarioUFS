from pydantic import BaseModel
from datetime import date
from typing import Optional

from src.database.entities.enums import (
    DenticaoEnum, 
    MastigacaoEnum, 
    RitmoIntestinal, 
    RitmoUrinario,
    ApetiteEnum 
)

class ChildAnamneseCreate(BaseModel):
    paciente_id: int
    tipo_registro: str

    # Dados iniciais
    data_consulta: date
    numero_prontuario: Optional[int] = None
    nutricionista_responsavel: str

    # Dados Socio-Econômicos
    escolar: Optional[bool] = False
    serie_escolar: Optional[str] = None
    turno_escolar: Optional[str] = None
    adaptacao_escolar: Optional[bool] = False
    merenda_escolar: Optional[bool] = False
    ocupacao_responsavel: Optional[str] = None
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
    crianca_ativa: Optional[str] = None
    horario_dorme: Optional[str] = None
    horario_acorda: Optional[str] = None

    # Dados de Saúde
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
    parasitoses_hma: Optional[bool] = False
    parasitoses_hf: Optional[bool] = False
    drge_hma: Optional[bool] = False
    drge_hf: Optional[bool] = False
    outras_patologias: Optional[str] = None
    faz_uso_medicamentos: Optional[bool] = False
    medicamentos: Optional[str] = None

    # Avaliação antropométrica
    peso_atual: Optional[str] = None
    peso_ao_nascer: Optional[str] = None
    comprimento_ao_nascer: Optional[str] = None
    altura: Optional[str] = None
    e_i: Optional[str] = None
    p_i: Optional[str] = None
    peso_para_comprimento: Optional[str] = None
    diagnostico_antropometrico: Optional[str] = None

    # Dados e sintomas clínicos
    denticao: Optional[DenticaoEnum] = None
    mastigacao: Optional[MastigacaoEnum] = None
    disfagia: Optional[bool] = False
    odinofagia: Optional[bool] = False
    dispepsia: Optional[bool] = False
    nauseas: Optional[bool] = False
    vomitos: Optional[bool] = False
    ritmo_intestinal: Optional[RitmoIntestinal] = None
    ritmo_urinario: Optional[RitmoUrinario] = None
    pele: Optional[str] = None
    unhas: Optional[str] = None
    cabelo: Optional[str] = None
    mucosas: Optional[str] = None
    edemas: Optional[str] = None
    abdomen: Optional[str] = None

    # Avaliação bioquímica
    data_ab: Optional[date] = None
    avaliacao_bioquimica: Optional[str] = None

    # História Alimentar
    aleitamento_materno_exclusivo: Optional[bool] = False
    tempo_aleitamento_materno_exclusivo: Optional[str] = None
    ainda_mama: Optional[bool] = False
    idade_desmame: Optional[str] = None
    possui_aversoes_alimentares: Optional[bool] = False
    aversoes_alimentares: Optional[str] = None
    possui_alergias_alimentares: Optional[bool] = False
    alergias_alimentares: Optional[str] = None
    ingestao_hidrica: Optional[str] = None
    existe_horario_mais_fome: Optional[bool] = False
    horario_mais_fome: Optional[str] = None
    apetite: Optional[ApetiteEnum] = None

    # Diagnóstico conclusivo
    diagnostico_conclusivo: Optional[str] = None


class ChildAnamneseResponse(ChildAnamneseCreate):
    id: int

    class Config:
        orm_mode = True
