from enum import Enum

class EscolaridadeEnum(str, Enum):
    analfabeto = "analfabeto"
    alfabetizado = "alfabetizado"
    fundamental_incompleto_completo = "fundamental_incompleto_completo"
    medio_incompleto_completo = "medio_incompleto_completo"
    superior_incompleto_completo = "superior_incompleto_completo"

class EstadoCivilEnum(str, Enum):
    casado = "casado"
    solteiro = "solteiro"
    viuvo = "viuvo"
    separado = "separado"

class DenticaoEnum(str, Enum):
    natural_completa = "natural_completa"
    protese_completa = "protese_completa"
    natural_parcial = "natural_parcial"
    protese_parcial = "protese_parcial"
    edentulo = "edentulo"

class DenticaoChildEnum(str, Enum):
    ausente = "ausente"
    em_desenvolvimento = "em_desenvolvimento"
    completa = "completa"

class MastigacaoEnum(str, Enum):
    normal = "normal"
    comprometida = "comprometida"

class RitmoIntestinal(str, Enum):
    normal = "normal"
    diarreia = "diarreia"
    obstipacao = "obstipacao"

class RitmoUrinario(str, Enum):
    oliguria = "oliguria"
    anuria = "anuria"
    poliuria = "poliuria"
    normal = "normal"

class ApetiteEnum(str, Enum):
    normal = "normal"
    aumentado = "aumentado"
    diminuido = "diminuido"

class SonoEnum(str, Enum):
    bom = "bom"
    mediano = "mediano"
    ruim = "ruim"

class SatisfacaoAlimentarEnum(str, Enum):
    insatisfeito = "insatisfeito"
    pouco_satisfeito = "pouco_satisfeito"
    satisfeito = "satisfeito"
    muito_satisfeito = "muito_satisfeito"

class GrauImcEnum(str, Enum):
    desnutricao_grau_i = "desnutricao_grau_i"
    desnutricao_grau_ii = "desnutricao_grau_ii"
    desnutricao_grau_iii = "desnutricao_grau_iii"
    eutrofia = "eutrofia"
    sobrepeso = "sobrepeso"
    obesidade_grau_i = "obesidade_grau_i"
    obesidade_grau_ii = "obesidade_grau_ii"
    obesidade_grau_iii = "obesidade_grau_iii"

class RecordatorioEnum(str, Enum):
    vinte_quatro_horas = "vinte_quatro_horas"
    habitual = "habitual"

