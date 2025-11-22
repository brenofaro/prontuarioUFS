from sqlalchemy import (
    Column, 
    Integer, 
    String, 
    ForeignKey, 
    Boolean, 
    Date, 
    Text, 
    Enum as SqlEnum
)
from sqlalchemy.orm import relationship
from src.database.connection import Base
from src.database.entities.enums import (
    DenticaoChildEnum, 
    MastigacaoEnum, 
    RitmoIntestinal, 
    RitmoUrinario,
    ApetiteEnum 
)

class ChildAnamnese(Base):
    __tablename__ = "child_anamneses"

    id = Column(Integer, primary_key=True, index=True)
    paciente_id = Column(Integer, ForeignKey("pacientes.id"))
    tipo_registro = Column(String, nullable=False)

    data_consulta = Column(Date, nullable=False)
    numero_prontuario = Column(Integer, unique=False)
    nutricionista_responsavel = Column(String, nullable=False)

    #Dados Socio-Econômicos
    escolar = Column(Boolean, nullable=True, default=False)
    serie_escolar = Column(String, nullable=True)
    turno_escolar = Column(String, nullable=True)
    adaptacao_escolar = Column(Boolean, nullable=True, default=False)
    merenda_escolar = Column(Boolean, nullable=True, default=False)
    ocupacao_responsavel = Column(String, nullable=True)
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
    crianca_ativa = Column(String, nullable=True)
    horario_dorme = Column(String, nullable=True)
    horario_acorda = Column(String, nullable=True)

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
    parasitoses_hma = Column(Boolean, nullable=True, default=False)
    parasitoses_hf = Column(Boolean, nullable=True, default=False)
    drge_hma = Column(Boolean, nullable=True, default=False)
    drge_hf = Column(Boolean, nullable=True, default=False)
    outras_patologias = Column(Text, nullable=True)
    faz_uso_medicamentos = Column(Boolean, nullable=True, default=False)
    medicamentos = Column(Text, nullable=True)

    #Avaliação antropométrica
    peso_atual = Column(String, nullable=True)
    peso_ao_nascer = Column(String, nullable=True)
    comprimento_ao_nascer = Column(String, nullable=True)
    altura = Column(String, nullable=True)
    e_i = Column(String, nullable=True)
    p_i = Column(String, nullable=True)
    peso_para_comprimento = Column(String, nullable=True)
    diagnostico_antropometrico = Column(Text, nullable=True)

    #Dados e sintomas clínicos
    denticao = Column(SqlEnum(DenticaoChildEnum), nullable=True)
    mastigacao = Column(SqlEnum(MastigacaoEnum), nullable=True)
    disfagia = Column(Boolean, nullable=True, default=False)
    odinofagia = Column(Boolean, nullable=True, default=False)
    dispepsia = Column(Boolean, nullable=True, default=False)
    nauseas = Column(Boolean, nullable=True, default=False)
    vomitos = Column(Boolean, nullable=True, default=False)
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
    aleitamento_materno_exclusivo = Column(Boolean, nullable=True, default=False)
    tempo_aleitamento_materno_exclusivo = Column(String, nullable=True)
    ainda_mama = Column(Boolean, nullable=True, default=False)
    idade_desmame = Column(String, nullable=True)
    possui_aversoes_alimentares = Column(Boolean, nullable=True, default=False)
    aversoes_alimentares = Column(Text, nullable=True)
    possui_alergias_alimentares = Column(Boolean, nullable=True, default=False)
    alergias_alimentares = Column(Text, nullable=True)
    ingestao_hidrica = Column(String, nullable=True, default=False)
    existe_horario_mais_fome = Column(Boolean, nullable=True, default=False)
    horario_mais_fome = Column(String, nullable=True)
    apetite = Column(SqlEnum(ApetiteEnum), nullable=True)
    motivo_apetite = Column(String, nullable=True)

    #Diagnóstico conclusivo
    diagnostico_conclusivo = Column(Text, nullable=True)

    paciente = relationship("Paciente", back_populates="child_anamneses")
