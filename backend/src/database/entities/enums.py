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
