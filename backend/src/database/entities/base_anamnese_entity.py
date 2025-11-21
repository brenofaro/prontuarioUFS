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
    tipo_registro = Column(String, nullable=False)

    data_consulta = Column(Date, nullable=False)
    numero_prontuario = Column(Integer, unique=False)
    nutricionista_responsavel = Column(String, nullable=False)

    #Dados Socio-Econômicos
    estado_civil = Column(SqlEnum(EstadoCivilEnum), nullable=True)
    escolaridade = Column(SqlEnum(EscolaridadeEnum), nullable=True)
    ocupacao = Column(String, nullable=True)
    faz_atividade_dentro_casa = Column(Boolean, nullable=True, default=False)
    atividade_dentro_casa = Column(String, nullable=True)
    pai_mae = Column(Boolean, nullable=True, default=False)
    conjuge = Column(Boolean, nullable=True, default=False)
    filho = Column(Boolean, nullable=True, default=False)
    irmao = Column(Boolean, nullable=True, default=False)
    netos = Column(Boolean, nullable=True, default=False)
    sobrinho = Column(Boolean, nullable=True, default=False)
    cunhado = Column(Boolean, nullable=True, default=False)
    so = Column(Boolean, nullable=True, default=False)
    amigos = Column(Boolean, nullable=True, default=False)
    outros_da_familia = Column(String, nullable=True)
    renda_pessoal = Column(String, nullable=True)
    gastos_alimentacao = Column(String, nullable=True)
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
    diabetes_hma = Column(Boolean, nullable=True, default=False)
    diabetes_hf = Column(Boolean, nullable=True, default=False) 
    hipertencao_hma = Column(Boolean, nullable=True, default=False)
    hipertencao_hf = Column(Boolean, nullable=True, default=False)
    doenca_cardiovascular_hma = Column(Boolean, nullable=True, default=False)
    doenca_cardiovascular_hf = Column(Boolean, nullable=True, default=False)
    dislipidemia_hma = Column(Boolean, nullable=True, default=False)
    dislipidemia_hf = Column(Boolean, nullable=True, default=False)
    cancer_hma = Column(Boolean, nullable=True, default=False)
    cancer_hf = Column(Boolean, nullable=True, default=False)       
    osteoporose_hma = Column(Boolean, nullable=True, default=False)
    osteoporose_hf = Column(Boolean, nullable=True, default=False)
    depressao_hma = Column(Boolean, nullable=True, default=False)
    depressao_hf = Column(Boolean, nullable=True, default=False)
    sop_hma = Column(Boolean, nullable=True, default=False)
    sop_hf = Column(Boolean, nullable=True, default=False)
    outras_patologias = Column(Text, nullable=True)
    faz_uso_medicamentos = Column(Boolean, nullable=True, default=False)
    medicamentos = Column(Text, nullable=True)

    #Avaliação antropométrica
    peso_atual = Column(String, nullable=True)
    peso_usual = Column(String, nullable=True)
    aj = Column(String, nullable=True)
    altura_real = Column(String, nullable=True)
    altura_estimada = Column(String, nullable=True)
    imc = Column(String, nullable=True)
    circunferencia_braco = Column(String, nullable=True)
    circunferencia_pescoco = Column(String, nullable=True)
    pct = Column(String, nullable=True)
    pcb = Column(String, nullable=True)
    pcse = Column(String, nullable=True)
    pcsi = Column(String, nullable=True)
    circunferencia_cintura = Column(String, nullable=True)
    circunferencia_panturrilha = Column(String, nullable=True)
    diagnostico_antropometrico = Column(Text, nullable=True)

    #Dados da bioimpedância 
    percentual_gordura = Column(String, nullable=True)
    peso_gordura = Column(String, nullable=True)
    massa_magra = Column(String, nullable=True)
    gordura_alvo = Column(String, nullable=True)
    peso_alvo = Column(String, nullable=True)
    tmb = Column(String, nullable=True)
    percentual_agua_massa_magra = Column(String, nullable=True)
    agua_corporal_total = Column(String, nullable=True)

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
