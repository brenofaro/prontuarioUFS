from sqlalchemy import (
    Column, 
    Integer, 
    Float, 
    String, 
    ForeignKey, 
    JSON, 
    Boolean, 
    Date, 
    Text, 
    Numeric, 
    Enum as SqlEnum
)
from sqlalchemy.orm import relationship
from src.database.connection import Base
from src.database.entities.enums import (
    EscolaridadeEnum, 
    EstadoCivilEnum, 
    DenticaoEnum, 
    MastigacaoEnum, 
    RitmoIntestinal, 
    RitmoUrinario,
    ApetiteEnum 
)

class BaseAnamnese(Base):
    __tablename__ = "base_anamneses"

    id = Column(Integer, primary_key=True, index=True)
    paciente_id = Column(Integer, ForeignKey("pacientes.id"))

    data_consulta = Column(Date, nullable=False)
    numero_prontuario = Column(String, nullable=False, unique=True)
    nutricionista_responsavel = Column(String, nullable=False)

    #Dados Socio-Econômicos
    estado_civil = Column(SqlEnum(EstadoCivilEnum), nullable=True)
    escolaridade = Column(SqlEnum(EscolaridadeEnum), nullable=True)
    ocupacao = Column(String, nullable=True)
    faz_atividade_dentro_casa = Column(Boolean, nullable=True, default=False)
    atividade_dentro_casa = Column(String, nullable=True)
    estrutura_familia = Column(JSON, nullable=True)
    renda_pessoal = Column(Float, nullable=True)
    gastos_alimentacao = Column(Float, nullable=True)
    faz_atividade_fisica = Column(Boolean, nullable=True, default=False)
    qual_atividade_fisica = Column(String, nullable=True)
    frequencia_atividade_fisica = Column(String, nullable=True)
    ja_fez_atividade_fisica = Column(Boolean, nullable=True, default=False)
    tempo_parado_atividade_fisica = Column(String, nullable=True)
    tem_etilismo = Column(Boolean, nullable=True, default=False)
    tipo_etilismo = Column(String, nullable=True)
    quanto_etilismo = Column(String, nullable=True)
    ja_foi_etilista = Column(Boolean, nullable=True, default=False)
    tempo_parado_etilismo = Column(String, nullable=True)
    tem_tabagismo = Column(Boolean, nullable=True, default=False)
    tipo_tabagismo = Column(String, nullable=True)
    quanto_tabagismo = Column(String, nullable=True)
    ja_foi_tabagista = Column(Boolean, nullable=True, default=False)
    tempo_parado_tabagismo = Column(String, nullable=True)

    #Dados de saúde
    objetivo_consulta = Column(Text, nullable=True)
    historia_doenca = Column(Text, nullable=True)
    hipertencao_hma = Column(Boolean, nullable=True)
    hipertencao_hf = Column(Boolean, nullable=True, default=False)
    diabetes_hma = Column(Boolean, nullable=True)
    diabetes_hf = Column(Boolean, nullable=True, default=False) 
    doenca_cardiovascular_hma = Column(Boolean, nullable=True)
    doenca_cardiovascular_hf = Column(Boolean, nullable=True, default=False)
    dislipidemia_hma = Column(Boolean, nullable=True)
    dislipidemia_hf = Column(Boolean, nullable=True, default=False)
    cancer_hma = Column(Boolean, nullable=True)
    cancer_hf = Column(Boolean, nullable=True, default=False)       
    osteoporose_hma = Column(Boolean, nullable=True)
    osteoporose_hf = Column(Boolean, nullable=True, default=False)
    depressao_hma = Column(Boolean, nullable=True)
    depressao_hf = Column(Boolean, nullable=True, default=False)
    sop_hma = Column(Boolean, nullable=True)
    sop_hf = Column(Boolean, nullable=True, default=False)
    outras_patologias = Column(Text, nullable=True)
    faz_uso_medicamentos = Column(Boolean, nullable=True, default=False)
    medicamentos = Column(Text, nullable=True)

    #Avaliação antropométrica
    peso_atual = Column(Float, nullable=True)
    peso_usual = Column(Float, nullable=True)
    aj = Column(Float, nullable=True)
    altura_real = Column(Float, nullable=True)
    altura_estimada = Column(Float, nullable=True)
    imc = Column(Float, nullable=True)
    circunferencia_braco = Column(Float, nullable=True)
    circunferencia_pescoco = Column(Float, nullable=True)
    pct = Column(Float, nullable=True)
    pcb = Column(Float, nullable=True)
    pcse = Column(Float, nullable=True)
    pcsi = Column(Float, nullable=True)
    circunferencia_cintura = Column(Float, nullable=True)
    circunferencia_panturrilha = Column(Float, nullable=True)
    diagnostico_antropometrico = Column(Text, nullable=True)

    #Dados da bioimpedância 
    percentual_gordura = Column(Numeric(5, 2), nullable=True)
    peso_gordura = Column(Float, nullable=True)
    massa_magra = Column(Float, nullable=True)
    gordura_alvo = Column(Float, nullable=True)
    peso_alvo = Column(Float, nullable=True)
    tmb = Column(Float, nullable=True)
    percentual_agua_massa_magra = Column(Numeric(5, 2), nullable=True)
    agua_corporal_total = Column(Float, nullable=True)

    #Dados e sintomas clínicos
    denticao = Column(SqlEnum(DenticaoEnum), nullable=True)
    mastigacao = Column(SqlEnum(MastigacaoEnum), nullable=True)
    disfagia = Column(Boolean, nullable=True, default=False)
    odinofagia = Column(Boolean, nullable=True, default=False)
    dispepsia = Column(Boolean, nullable=True, default=False)
    nauseas = Column(Boolean, nullable=True, default=False)
    vomitos = Column(Boolean, nullable=True, default=False)
    flatulencia = Column(Boolean, nullable=True, default=False)
    ritmo_intestinal = Column(SqlEnum(RitmoIntestinal), nullable=True)
    ritmo_urinario = Column(SqlEnum(RitmoUrinario), nullable=True)
    pele = Column(String, nullable=True)
    unhas = Column(String, nullable=True)
    cabelo = Column(String, nullable=True)
    mucosas = Column(String, nullable=True)
    edemas = Column(String, nullable=True)
    abdomen = Column(String, nullable=True)

    #Avaliação bioquímica
    data_ab = Column(Date, nullable=True)
    avaliacao_bioquimica = Column(Text, nullable=True)

    #História Alimentar
    possui_aversoes_alimentares = Column(Boolean, nullable=True, default=False)
    aversoes_alimentares = Column(Text, nullable=True)
    possui_alergias_alimentares = Column(Boolean, nullable=True, default=False)
    alergias_alimentares = Column(Text, nullable=True)
    ingestao_hidrica = Column(String, nullable=True, default=False)
    existe_horario_mais_fome = Column(Boolean, nullable=True, default=False)
    horario_mais_fome = Column(String, nullable=True)
    apetite = Column(SqlEnum(ApetiteEnum), nullable=True)

    #Diagnóstico conclusivo
    diagnostico_conclusivo = Column(Text, nullable=True)


    paciente = relationship("Paciente", back_populates="base_anamneses")
