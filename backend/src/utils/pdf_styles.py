from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet

def get_styles():
    styles = getSampleStyleSheet()

    styles.add(ParagraphStyle(
        name="Titulo",
        fontSize=22,
        leading=26,
        alignment=1,  # centralizado
        spaceAfter=25,
        textColor=colors.HexColor("#1A237E"),
    ))

    styles.add(ParagraphStyle(
        name="Subtitulo",
        fontSize=14,
        leading=18,
        spaceBefore=20,
        spaceAfter=10,
        textColor=colors.HexColor("#0D47A1"),
        bold=True
    ))

    styles.add(ParagraphStyle(
        name="Campo",
        fontSize=11,
        leading=14,
        textColor=colors.black,
        bold=True
    ))

    styles.add(ParagraphStyle(
        name="Valor",
        fontSize=11,
        leading=14,
        textColor=colors.HexColor("#444444")
    ))

    return styles
