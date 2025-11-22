from reportlab.lib.pagesizes import A4
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from io import BytesIO


def gerar_pdf_food_plan(anamnese: dict):
    buffer = BytesIO()

    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        leftMargin=40,
        rightMargin=40,
        topMargin=50,
        bottomMargin=40
    )

    styles = getSampleStyleSheet()

    # Estilos personalizados
    titulo = ParagraphStyle(
        "Titulo",
        fontSize=18,
        leading=22,
        alignment=1,  # centralizado
        textColor=colors.HexColor("#2c3e50"),
        fontName="Helvetica-Bold",
        spaceAfter=20,
    )

    th_style = ParagraphStyle(
        "TableHeader",
        fontSize=11,
        textColor=colors.HexColor("#6c757d"),
        fontName="Helvetica-Bold",
        spaceAfter=6
    )

    cell_title = ParagraphStyle(
        "CellTitle",
        fontSize=11,
        fontName="Helvetica-Bold",
        textColor=colors.HexColor("#2c3e50"),
    )

    cell_text = ParagraphStyle(
        "CellText",
        fontSize=10,
        leading=14,
        textColor=colors.HexColor("#495057")
    )

    obs_title_style = ParagraphStyle(
        "ObsTitle",
        fontSize=11,
        fontName="Helvetica-Bold",
        textColor=colors.HexColor("#6c757d"),
        spaceBefore=20,
        spaceAfter=6,
    )

    story = []

    # ---------------------------------------------------------
    #                   TÍTULO
    # ---------------------------------------------------------
    story.append(Paragraph("Plano Alimentar", titulo))
    story.append(Spacer(1, 10))

    # ---------------------------------------------------------
    #          TABELA EXATAMENTE COMO A SUA TELA
    # ---------------------------------------------------------
    cabecalho = [
        Paragraph("REFEIÇÃO / HORÁRIO", th_style),
        Paragraph("ALIMENTOS - QUANTIDADE", th_style),
        Paragraph("SUBSTITUIÇÕES - OBSERVAÇÕES", th_style),
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
        refeicao = anamnese.get(r)
        alimentos = anamnese.get(a)
        substituicoes = anamnese.get(s)

        if refeicao or alimentos or substituicoes:
            tabela_dados.append([
                Paragraph(refeicao or "-", cell_title),
                Paragraph((alimentos or "-").replace("\n", "<br/>"), cell_text),
                Paragraph((substituicoes or "-").replace("\n", "<br/>"), cell_text),
            ])

    tabela = Table(
        tabela_dados,
        colWidths=[150, 200, 170],
        hAlign="LEFT"
    )

    tabela.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.whitesmoke),
        ("BOTTOMPADDING", (0, 0), (-1, 0), 12),
        ("LINEBELOW", (0, 0), (-1, 0), 1, colors.HexColor("#e9ecef")),

        ("VALIGN", (0, 1), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 1), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 1), (-1, -1), 8),

        ("BOX", (0, 1), (-1, -1), 0.5, colors.HexColor("#e9ecef")),
        ("INNERGRID", (0, 1), (-1, -1), 0.5, colors.HexColor("#f2f2f2")),
    ]))

    story.append(tabela)

    # ---------------------------------------------------------
    #                  OBSERVAÇÕES
    # ---------------------------------------------------------
    story.append(Paragraph("Observações:", obs_title_style))

    observacoes = anamnese.get("observacoes_plano_alimentar") or "Não informado"

    box = Table(
        [[Paragraph(observacoes.replace("\n", "<br/>"), cell_text)]],
        colWidths=[500]
    )

    box.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#f8f9fa")),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ("LINELEFT", (0, 0), (0, -1), 4, colors.HexColor("#6c757d")),
        ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#dee2e6")),
        ("ROUNDEDCORNERS", (0, 0), (-1, -1), 8),
    ]))

    story.append(box)

    # ---------------------------------------------------------
    #                   FINALIZA PDF
    # ---------------------------------------------------------
    doc.build(story)
    buffer.seek(0)
    return buffer
