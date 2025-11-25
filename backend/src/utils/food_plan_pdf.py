from reportlab.lib.pagesizes import A4
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from datetime import datetime, date
from io import BytesIO


def safe(value):
    """Garante que qualquer valor seja convertido para string válida."""
    if value is None:
        return "-"
    if isinstance(value, (int, float)):
        return str(value)
    if hasattr(value, "isoformat"):  # datetime.date / datetime.datetime
        return formatar_data_br(value)
    return str(value)

def formatar_data_br(valor):
    """Converte datetime/date para DD/MM/YYYY. Caso contrário, retorna '-'."""
    if not valor:
        return "-"

    if isinstance(valor, (date, datetime)):
        return valor.strftime("%d/%m/%Y")

    # Se já vier como string (ex: do frontend), tenta converter
    try:
        return datetime.fromisoformat(valor).strftime("%d/%m/%Y")
    except:
        return str(valor)
    
def set_pdf_metadata(canvas, doc, paciente_nome):
    canvas.setTitle(f"Plano Alimentar - {paciente_nome}")

def gerar_pdf_food_plan(anamnese: dict, paciente_nome: str):
    buffer = BytesIO()

    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        leftMargin=40,
        rightMargin=40,
        topMargin=40,
        bottomMargin=40
    )

    styles = getSampleStyleSheet()

    # ---------------------------------------------------------
    # ESTILOS
    # ---------------------------------------------------------
    header_style = ParagraphStyle(
        "Header",
        fontSize=11,
        leading=14,
        alignment=1,
        fontName="Helvetica-Bold",
        textColor=colors.HexColor("#2c3e50")
    )

    titulo_principal = ParagraphStyle(
        "TituloPrincipal",
        fontSize=15,
        leading=18,
        alignment=1,
        fontName="Helvetica-Bold",
        textColor=colors.HexColor("#2c3e50"),
        spaceAfter=14,
    )

    label_style = ParagraphStyle(
        "LabelStyle",
        fontSize=10,
        fontName="Helvetica-Bold",
        textColor=colors.HexColor("#444"),  # mais suave
    )

    value_style = ParagraphStyle(
        "ValueStyle",
        fontSize=10,
        textColor=colors.HexColor("#000"),
    )


    th_style = ParagraphStyle(
        "TableHeader",
        fontSize=11,
        textColor=colors.HexColor("#6c757d"),
        fontName="Helvetica-Bold",
    )

    cell_text = ParagraphStyle(
        "CellText",
        fontSize=10,
        leading=14,
        textColor=colors.HexColor("#495057")
    )

    story = []

    # ---------------------------------------------------------
    # CABEÇALHO INSTITUCIONAL
    # ---------------------------------------------------------
    header_lines = [
        "UNIVERSIDADE FEDERAL DE SERGIPE",
        "CAMPUS PROFº ANTÔNIO GARCIA FILHO",
        "DEPARTAMENTO DE NUTRIÇÃO - DNUTL",
        "CLÍNICA ESCOLA DE NUTRIÇÃO"
    ]

    for line in header_lines:
        story.append(Paragraph(line, header_style))

    story.append(Spacer(1, 8))
    story.append(Paragraph("PLANO ALIMENTAR QUALITATIVO", titulo_principal))
    story.append(Spacer(1, 10))

    # ---------------------------------------------------------
    # DADOS DO PACIENTE + DATA + NUTRICIONISTA
    # ---------------------------------------------------------
    tabela_info = Table(
        [
            [Paragraph("Paciente:", label_style), Paragraph(safe(paciente_nome), value_style)],
            [Paragraph("Data:", label_style), Paragraph(safe(anamnese.get("data_plano_alimentar")), value_style)],
            [Paragraph("Nutricionista:", label_style),
            Paragraph(safe(anamnese.get("nutricionista_responsavel")), value_style)],
        ],
        colWidths=[130, 330]
    )

    tabela_info.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))


    story.append(tabela_info)
    story.append(Spacer(1, 20))

    # ---------------------------------------------------------
    # TABELA DO PLANO
    # ---------------------------------------------------------
    cabecalho = [
        Paragraph("REFEIÇÃO / HORÁRIO", th_style),
        Paragraph("ALIMENTOS - QUANTIDADE", th_style),
        Paragraph("SUBSTITUIÇÕES / OBSERVAÇÕES", th_style)
    ]

    linhas_frontend = [
        ("refeicao_um", "alimentos_um", "substituicoes_um"),
        ("refeicao_dois", "alimentos_dois", "substituicoes_dois"),
        ("refeicao_tres", "alimentos_tres", "substituicoes_tres"),
        ("refeicao_quatro", "alimentos_quatro", "substituicoes_quatro"),
        ("refeicao_cinco", "alimentos_cinco", "substituicoes_cinco"),
        ("refeicao_seis", "alimentos_seis", "substituicoes_seis"),
    ]

    tabela_dados = [cabecalho]

    for r, a, s in linhas_frontend:
        refeicao = safe(anamnese.get(r))
        alimentos = safe(anamnese.get(a)).replace("\n", "<br/>")
        substit = safe(anamnese.get(s)).replace("\n", "<br/>")

        tabela_dados.append([
            Paragraph(refeicao, cell_text),
            Paragraph(alimentos, cell_text),
            Paragraph(substit, cell_text)
        ])

    tabela = Table(tabela_dados, colWidths=[140, 200, 160])

    tabela.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.whitesmoke),
        ("LINEBELOW", (0, 0), (-1, 0), 1, colors.HexColor("#dee2e6")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BOX", (0, 1), (-1, -1), 0.5, colors.HexColor("#dee2e6")),
        ("INNERGRID", (0, 1), (-1, -1), 0.5, colors.HexColor("#e9ecef")),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6)
    ]))

    story.append(tabela)
    story.append(Spacer(1, 25))

    # ---------------------------------------------------------
    # OBSERVAÇÕES
    # ---------------------------------------------------------
    story.append(Paragraph("Observações:", label_style))
    story.append(Spacer(1, 6))

    obs = safe(anamnese.get("observacoes_plano_alimentar"))

    obs_table = Table(
        [[Paragraph(obs.replace("\n", "<br/>"), cell_text)]],
        colWidths=[500]
    )
    obs_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#f8f9fa")),
        ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#dee2e6")),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))

    story.append(obs_table)

    doc.build(
        story,
        onFirstPage=lambda canvas, doc: set_pdf_metadata(canvas, doc, paciente_nome)
    )

    buffer.seek(0)
    return buffer
