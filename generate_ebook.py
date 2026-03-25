"""
Keymatic E-book: Guia Rápido — O Futuro do Seu Negócio com IA
Design Philosophy: Neon Cartography — Dark Tech Keymatic
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import Color, HexColor
from reportlab.pdfgen.canvas import Canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import subprocess
import os

# ═══════════════════════════════════════════════════════════
# SETUP
# ═══════════════════════════════════════════════════════════

W, H = A4  # 595.27 x 841.89 points

# Colors
BG = HexColor("#09090b")
BG_CARD = HexColor("#18181b")
ORANGE = HexColor("#f97316")
PINK = HexColor("#ec4899")
PURPLE = HexColor("#a855f7")
WHITE = HexColor("#fafafa")
ZINC_300 = HexColor("#d4d4d8")
ZINC_400 = HexColor("#a1a1aa")
ZINC_500 = HexColor("#71717a")
ZINC_600 = HexColor("#52525b")
ZINC_700 = HexColor("#3f3f46")
EMERALD = HexColor("#22c55e")

ML = 42; MR = 42; MT = 55; MB = 50
CW = W - ML - MR

# Fonts
def _winpath(p):
    r = subprocess.run(["cygpath", "-w", p], capture_output=True, text=True)
    return r.stdout.strip() + "\\"

FI = _winpath("/tmp/fonts/inter/extras/ttf")
FJ = _winpath("/tmp/fonts/jbm/fonts/ttf")

pdfmetrics.registerFont(TTFont("Inter", FI + "Inter-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Inter-Light", FI + "Inter-Light.ttf"))
pdfmetrics.registerFont(TTFont("Inter-Medium", FI + "Inter-Medium.ttf"))
pdfmetrics.registerFont(TTFont("Inter-SemiBold", FI + "Inter-SemiBold.ttf"))
pdfmetrics.registerFont(TTFont("Inter-Bold", FI + "Inter-Bold.ttf"))
pdfmetrics.registerFont(TTFont("JBM", FJ + "JetBrainsMono-Regular.ttf"))
pdfmetrics.registerFont(TTFont("JBM-Med", FJ + "JetBrainsMono-Medium.ttf"))
pdfmetrics.registerFont(TTFont("JBM-Bold", FJ + "JetBrainsMono-Bold.ttf"))

OUT = r"c:\Projetos\keymatic-vitrine\vitrine\public\downloads\guia-tecnologia-negocios-2026.pdf"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

c = Canvas(OUT, pagesize=A4)
c.setTitle("Guia Rápido: O Futuro do Seu Negócio com IA — Keymatic")
c.setAuthor("Keymatic — VTS Comércio e Serviços LTDA")
c.setSubject("5 Dicas Práticas para Ganhar Tempo e Dinheiro Hoje")


# ═══════════════════════════════════════════════════════════
# HELPERS
# ═══════════════════════════════════════════════════════════

def fill_bg():
    c.setFillColor(BG)
    c.rect(0, 0, W, H, fill=1, stroke=0)

def grad_line(x, y, w, h=2):
    steps = 60
    sw = w / steps
    for i in range(steps):
        t = i / (steps - 1)
        if t < 0.5:
            t2 = t * 2
            r = ORANGE.red*(1-t2) + PINK.red*t2
            g = ORANGE.green*(1-t2) + PINK.green*t2
            b = ORANGE.blue*(1-t2) + PINK.blue*t2
        else:
            t2 = (t-0.5)*2
            r = PINK.red*(1-t2) + PURPLE.red*t2
            g = PINK.green*(1-t2) + PURPLE.green*t2
            b = PINK.blue*(1-t2) + PURPLE.blue*t2
        c.setFillColor(Color(r, g, b))
        c.rect(x + i*sw, y, sw+0.5, h, fill=1, stroke=0)

def glow(cx, cy, radius, alpha=0.06):
    for i in range(25, 0, -1):
        t = i / 25
        r = radius * t
        a = alpha * (1 - t) * 1.5
        c.setFillColor(Color(ORANGE.red, ORANGE.green, ORANGE.blue, a))
        c.circle(cx, cy, r, fill=1, stroke=0)

def dots(x0, y0, x1, y1, sp=28, a=0.025):
    c.setFillColor(Color(1,1,1,a))
    x = x0
    while x <= x1:
        y = y0
        while y <= y1:
            c.circle(x, y, 0.6, fill=1, stroke=0)
            y += sp
        x += sp

def wrap(text, x, y, font="Inter", size=10, color=ZINC_400, mw=None, lead=None):
    if mw is None: mw = CW
    if lead is None: lead = size * 1.55
    c.setFont(font, size); c.setFillColor(color)
    words = text.split(); lines = []; cur = ""
    for w in words:
        t = cur + (" " if cur else "") + w
        if pdfmetrics.stringWidth(t, font, size) > mw:
            if cur: lines.append(cur)
            cur = w
        else:
            cur = t
    if cur: lines.append(cur)
    for line in lines:
        c.drawString(x, y, line); y -= lead
    return y

def page_num(n, total=8):
    c.setFont("JBM", 7); c.setFillColor(ZINC_700)
    t = f"{n:02d} / {total:02d}"
    c.drawRightString(W-MR, MB-20, t)
    c.setStrokeColor(Color(1,1,1,0.04)); c.setLineWidth(0.5)
    c.line(ML, MB-8, W-MR, MB-8)

def section_num(num, x, y):
    c.setFillColor(Color(ORANGE.red, ORANGE.green, ORANGE.blue, 0.08))
    c.circle(x+14, y+6, 22, fill=1, stroke=0)
    c.setFillColor(Color(ORANGE.red, ORANGE.green, ORANGE.blue, 0.15))
    c.circle(x+14, y+6, 16, fill=1, stroke=0)
    c.setFont("JBM-Bold", 22); c.setFillColor(ORANGE)
    nw = pdfmetrics.stringWidth(num, "JBM-Bold", 22)
    c.drawString(x+14-nw/2, y-2, num)

def tip_header(y, num, title_white, title_orange):
    c.setFont("JBM-Med", 7); c.setFillColor(ZINC_600)
    c.drawString(ML, y, "DICA PRÁTICA")
    y -= 8
    section_num(num, ML, y-10)
    c.setFont("Inter-Bold", 24); c.setFillColor(WHITE)
    c.drawString(ML+48, y-6, title_white)
    y -= 30
    c.setFont("Inter-Bold", 24); c.setFillColor(ORANGE)
    c.drawString(ML+48, y-6, title_orange)
    y -= 35
    grad_line(ML, y, 100, 1.5)
    y -= 25
    return y

def labeled_block(y, label, label_color, text, text_color=ZINC_400, text_font="Inter", text_size=9.5):
    c.setFont("JBM-Med", 7.5); c.setFillColor(label_color)
    c.drawString(ML+12, y, label)
    y -= 16
    y = wrap(text, ML+12, y, text_font, text_size, text_color, CW-24, text_size*1.55)
    return y - 6

def result_box(y, text):
    bh = 46
    c.setFillColor(Color(EMERALD.red, EMERALD.green, EMERALD.blue, 0.06))
    c.roundRect(ML, y-bh+10, CW, bh, 6, fill=1, stroke=0)
    c.setStrokeColor(Color(EMERALD.red, EMERALD.green, EMERALD.blue, 0.15))
    c.setLineWidth(0.5)
    c.roundRect(ML, y-bh+10, CW, bh, 6, fill=0, stroke=1)
    c.setFillColor(EMERALD)
    c.roundRect(ML, y-bh+10, 3, bh, 1.5, fill=1, stroke=0)
    c.setFont("JBM-Med", 7.5); c.setFillColor(EMERALD)
    c.drawString(ML+14, y+1, "RESULTADO")
    wrap(text, ML+14, y-12, "Inter-Medium", 9, ZINC_300, CW-28, 14)
    return y - bh - 8

def prompt_box(y, prompt_text):
    """Draw a styled prompt/command box."""
    # Measure text to get box height
    words = prompt_text.split(); lines_text = []; cur = ""
    mw = CW - 40
    for w in words:
        t = cur + (" " if cur else "") + w
        if pdfmetrics.stringWidth(t, "Inter", 8.5) > mw:
            if cur: lines_text.append(cur)
            cur = w
        else:
            cur = t
    if cur: lines_text.append(cur)
    n_lines = len(lines_text)
    bh = 24 + n_lines * 13

    c.setFillColor(Color(PURPLE.red, PURPLE.green, PURPLE.blue, 0.05))
    c.roundRect(ML, y-bh+10, CW, bh, 6, fill=1, stroke=0)
    c.setStrokeColor(Color(PURPLE.red, PURPLE.green, PURPLE.blue, 0.12))
    c.setLineWidth(0.5)
    c.roundRect(ML, y-bh+10, CW, bh, 6, fill=0, stroke=1)

    # Prompt icon
    c.setFont("JBM-Bold", 9); c.setFillColor(PURPLE)
    c.drawString(ML+12, y-2, ">>")
    c.setFont("JBM-Med", 7); c.setFillColor(PURPLE)
    c.drawString(ML+30, y, "PROMPT")

    # Prompt text
    ty = y - 16
    c.setFont("Inter", 8.5); c.setFillColor(ZINC_300)
    for line in lines_text:
        c.drawString(ML+14, ty, line)
        ty -= 13

    return y - bh - 4


# ═══════════════════════════════════════════════════════════
# PAGE 1 — CAPA
# ═══════════════════════════════════════════════════════════

def page_cover():
    fill_bg()
    dots(ML, MB, W-MR, H-MT, 28, 0.025)
    glow(W*0.6, H*0.55, 280, 0.04)
    glow(W*0.3, H*0.35, 200, 0.03)

    # Top line
    grad_line(ML, H-80, CW, 1.5)

    # Tag
    c.setFont("JBM-Med", 7.5); c.setFillColor(ZINC_600)
    c.drawString(ML, H-100, "E-BOOK EXCLUSIVO  •  EDIÇÃO COMEMORATIVA 20 ANOS  •  KEYMATIC")

    # Title
    y = H - 195
    c.setFont("Inter-Bold", 36); c.setFillColor(WHITE)
    c.drawString(ML, y, "Guia Rápido")

    y -= 48
    c.setFont("Inter-Bold", 36); c.setFillColor(WHITE)
    c.drawString(ML, y, "O Futuro do Seu")

    y -= 48
    # Gradient "Negócio com IA"
    text = "Negócio com IA"
    x_pos = ML
    c.setFont("Inter-Bold", 36)
    for i, ch in enumerate(text):
        t = i / max(len(text)-1, 1)
        if t < 0.5:
            t2 = t*2
            r = ORANGE.red*(1-t2) + PINK.red*t2
            g = ORANGE.green*(1-t2) + PINK.green*t2
            b = ORANGE.blue*(1-t2) + PINK.blue*t2
        else:
            t2 = (t-0.5)*2
            r = PINK.red*(1-t2) + PURPLE.red*t2
            g = PINK.green*(1-t2) + PURPLE.green*t2
            b = PINK.blue*(1-t2) + PURPLE.blue*t2
        c.setFillColor(Color(r, g, b))
        c.drawString(x_pos, y, ch)
        x_pos += pdfmetrics.stringWidth(ch, "Inter-Bold", 36)

    # Divider
    y -= 28
    grad_line(ML, y, 120, 2)

    # Subtitle
    y -= 32
    c.setFont("Inter-SemiBold", 15); c.setFillColor(ZINC_300)
    c.drawString(ML, y, "5 Dicas Práticas para Ganhar")
    y -= 22
    c.drawString(ML, y, "Tempo e Dinheiro Hoje")

    # Powered by badge
    y -= 50
    bw = 320; bh = 44
    c.setFillColor(Color(1,1,1,0.03))
    c.roundRect(ML, y-bh+10, bw, bh, 8, fill=1, stroke=0)
    c.setStrokeColor(Color(1,1,1,0.06)); c.setLineWidth(0.5)
    c.roundRect(ML, y-bh+10, bw, bh, 8, fill=0, stroke=1)

    c.setFont("Inter-SemiBold", 11); c.setFillColor(WHITE)
    c.drawString(ML+16, y-6, "Keymatic")
    c.setFont("Inter", 9); c.setFillColor(ZINC_500)
    c.drawString(ML+16, y-22, "Powered by VTS Informática — 20 Anos de Confiança")

    # Bottom stat boxes
    y_bottom = MB + 80
    box_w = 150; box_h = 58; gap = 16; bx = ML
    for label, value in [("FORMATO", "E-book"), ("TEMPO", "~5 min"), ("PREÇO", "Grátis")]:
        c.setFillColor(Color(1,1,1,0.03))
        c.roundRect(bx, y_bottom, box_w, box_h, 6, fill=1, stroke=0)
        c.setStrokeColor(Color(1,1,1,0.06)); c.setLineWidth(0.5)
        c.roundRect(bx, y_bottom, box_w, box_h, 6, fill=0, stroke=1)
        c.setFont("JBM", 6.5); c.setFillColor(ZINC_600)
        c.drawString(bx+12, y_bottom+box_h-16, label)
        c.setFont("Inter-SemiBold", 15); c.setFillColor(WHITE)
        c.drawString(bx+12, y_bottom+12, value)
        bx += box_w + gap

    # Footer
    c.setFont("JBM", 7); c.setFillColor(ZINC_700)
    c.drawString(ML, MB+20, "keymatic.com.br")
    c.drawRightString(W-MR, MB+20, "WhatsApp: (11) 93429-4637")
    grad_line(ML, MB+8, CW, 1)

    c.showPage()


# ═══════════════════════════════════════════════════════════
# PAGE 2 — O QUE É IA
# ═══════════════════════════════════════════════════════════

def page_what_is_ai():
    fill_bg()
    dots(ML, MB, W-MR, H-MT, 32, 0.02)
    page_num(2)
    glow(W*0.7, H*0.7, 200, 0.03)

    y = H - MT

    c.setFont("JBM-Med", 7); c.setFillColor(ORANGE)
    c.drawString(ML, y, "ENTENDA DE UMA VEZ")
    y -= 35

    c.setFont("Inter-Bold", 28); c.setFillColor(WHITE)
    c.drawString(ML, y, "O que é Inteligência")
    y -= 35
    c.setFont("Inter-Bold", 28); c.setFillColor(ORANGE)
    c.drawString(ML, y, "Artificial?")
    y -= 12
    grad_line(ML, y, 80, 2)
    y -= 30

    # Simple explanation
    c.setFont("Inter-SemiBold", 14); c.setFillColor(WHITE)
    y = wrap("Esqueça os robôs de filmes.", ML, y, "Inter-SemiBold", 14, WHITE, CW, 22)
    y -= 8

    y = wrap("Pense na IA como um assistente ultra-inteligente e super-rápido que trabalha para você 24 horas por dia.", ML, y, "Inter-Medium", 12, ZINC_300, CW, 19)
    y -= 20

    # Separator
    c.setStrokeColor(Color(1,1,1,0.06)); c.setLineWidth(0.5)
    c.line(ML, y, W-MR, y)
    y -= 25

    # How it works
    c.setFont("JBM-Med", 7); c.setFillColor(ZINC_600)
    c.drawString(ML, y, "COMO FUNCIONA")
    y -= 22

    y = wrap("A IA não \"pensa\" como um humano, mas ela analisou bilhões de textos e dados. Por isso, ela consegue:", ML, y, "Inter", 10, ZINC_400, CW, 16)
    y -= 10

    abilities = [
        "Prever padrões de comportamento dos seus clientes",
        "Criar textos profissionais em segundos",
        "Responder perguntas frequentes automaticamente",
        "Organizar informações e gerar relatórios",
    ]
    for ab in abilities:
        c.setFillColor(ORANGE); c.circle(ML+5, y+3, 2.5, fill=1, stroke=0)
        y = wrap(ab, ML+16, y, "Inter", 10, ZINC_300, CW-16, 15)
        y -= 6

    y -= 20

    # Key benefit box
    bh = 80
    c.setFillColor(Color(ORANGE.red, ORANGE.green, ORANGE.blue, 0.05))
    c.roundRect(ML, y-bh+10, CW, bh, 8, fill=1, stroke=0)
    c.setStrokeColor(Color(ORANGE.red, ORANGE.green, ORANGE.blue, 0.15))
    c.setLineWidth(0.8)
    c.roundRect(ML, y-bh+10, CW, bh, 8, fill=0, stroke=1)
    c.setFillColor(ORANGE)
    c.roundRect(ML, y-bh+10, 3, bh, 1.5, fill=1, stroke=0)

    c.setFont("JBM-Med", 7.5); c.setFillColor(ORANGE)
    c.drawString(ML+18, y+1, "O GRANDE BENEFÍCIO PARA O SEU NEGÓCIO")
    c.setFont("Inter-SemiBold", 12); c.setFillColor(WHITE)
    wrap("A IA faz as tarefas repetitivas e chatas, para que você possa focar no que realmente importa:", ML+18, y-18, "Inter-SemiBold", 12, WHITE, CW-36, 18)
    c.setFont("Inter-Medium", 12); c.setFillColor(ORANGE)
    c.drawString(ML+18, y-52, "atender seu cliente e fazer o negócio crescer.")

    y -= bh + 25

    # What's next
    c.setStrokeColor(Color(1,1,1,0.06)); c.setLineWidth(0.5)
    c.line(ML, y, W-MR, y)
    y -= 22

    c.setFont("JBM-Med", 7); c.setFillColor(ZINC_600)
    c.drawString(ML, y, "NAS PRÓXIMAS PÁGINAS")
    y -= 18

    tips_preview = [
        ("01", "Marketing sem bloqueio criativo"),
        ("02", "Atendimento 24h no WhatsApp"),
        ("03", "E-mails e orçamentos profissionais"),
        ("04", "Resumo de textos e contratos"),
        ("05", "Ideias de promoções e produtos"),
    ]
    for num, title in tips_preview:
        c.setFont("JBM-Bold", 11); c.setFillColor(ORANGE)
        c.drawString(ML, y, num)
        c.setFont("Inter-Medium", 10); c.setFillColor(WHITE)
        c.drawString(ML+30, y+1, title)
        # Dot line
        c.setStrokeColor(Color(1,1,1,0.06)); c.setLineWidth(0.5)
        c.setDash(2, 4)
        te = ML + 30 + pdfmetrics.stringWidth(title, "Inter-Medium", 10) + 8
        c.line(te, y+5, W-MR, y+5)
        c.setDash()
        y -= 24

    c.showPage()


# ═══════════════════════════════════════════════════════════
# PAGE 3 — DICA 1: Marketing
# ═══════════════════════════════════════════════════════════

def page_tip1():
    fill_bg()
    dots(ML, MB, W-MR, H-MT, 32, 0.02)
    page_num(3)
    glow(W*0.8, H*0.8, 180, 0.025)

    y = H - MT
    y = tip_header(y, "01", "O Fim da", '"Folha em Branco"')

    # Problem
    y = labeled_block(y, "O PROBLEMA", HexColor("#ef4444"),
        "Você sabe que precisa postar nas redes sociais, mas não tem ideia do que escrever. A tela em branco te paralisa e você acaba não postando nada.")
    y -= 8

    # Solution
    c.setFont("JBM-Med", 7.5); c.setFillColor(PURPLE)
    c.drawString(ML+12, y, "A SOLUÇÃO COM IA")
    y -= 16

    y = wrap("Use o ChatGPT (ou similar). É simples — basta pedir com clareza:", ML+12, y, "Inter", 9.5, ZINC_400, CW-24, 15)
    y -= 8

    y = prompt_box(y, '"Crie 5 ideias de postagens para o Instagram de uma [Sua Área/Negócio], focadas em atrair clientes locais."')
    y -= 8

    y = wrap("Troque [Sua Área/Negócio] pelo seu segmento real. Ex: padaria artesanal, oficina mecânica, salão de beleza...", ML+12, y, "Inter", 8.5, ZINC_500, CW-24, 13)
    y -= 12

    # Result
    y = result_box(y, "Você ganha um cronograma de postagens em segundos. Sem bloqueio criativo, sem desculpas para não postar.")

    # Extra tip
    y -= 12
    c.setFillColor(Color(1,1,1,0.03))
    c.roundRect(ML, y-50, CW, 55, 6, fill=1, stroke=0)
    c.setFont("JBM-Med", 7); c.setFillColor(ORANGE)
    c.drawString(ML+12, y-4, "DICA EXTRA")
    wrap("Peça também: \"Crie um calendário de postagens para a semana inteira com legendas prontas.\" A IA entrega tudo formatado e pronto para copiar e colar.", ML+12, y-18, "Inter", 8.5, ZINC_400, CW-24, 13)

    c.showPage()


# ═══════════════════════════════════════════════════════════
# PAGE 4 — DICA 2: WhatsApp 24h
# ═══════════════════════════════════════════════════════════

def page_tip2():
    fill_bg()
    dots(ML, MB, W-MR, H-MT, 32, 0.02)
    page_num(4)
    glow(W*0.2, H*0.7, 160, 0.025)

    y = H - MT
    y = tip_header(y, "02", "Atendimento 24h", "no WhatsApp")

    y = labeled_block(y, "O PROBLEMA", HexColor("#ef4444"),
        "Clientes mandam mensagem à noite ou no fim de semana e você perde a venda porque demora a responder. Enquanto você dorme, o cliente vai para o concorrente.")
    y -= 8

    c.setFont("JBM-Med", 7.5); c.setFillColor(PURPLE)
    c.drawString(ML+12, y, "A SOLUÇÃO COM IA")
    y -= 16

    y = wrap("Automatize seu WhatsApp com um Agente Inteligente (como os que criamos na Keymatic). Ele pode:", ML+12, y, "Inter", 9.5, ZINC_400, CW-24, 15)
    y -= 8

    actions = [
        "Saudar o cliente pelo nome automaticamente",
        "Tirar dúvidas frequentes com respostas inteligentes",
        "Agendar horários e enviar confirmações",
        "Enviar catálogo de produtos ou serviços",
        "Recuperar clientes que abandonaram o carrinho",
    ]
    for act in actions:
        c.setFillColor(ORANGE); c.circle(ML+16, y+3, 2, fill=1, stroke=0)
        y = wrap(act, ML+26, y, "Inter", 9, ZINC_300, CW-38, 14)
        y -= 4
    y -= 8

    y = result_box(y, "Nenhum cliente fica sem resposta. Você não perde oportunidades mesmo dormindo, viajando ou em reunião.")

    # Stat
    y -= 12
    sw = (CW - 12) / 2
    for i, (stat, label) in enumerate([("78%", "dos clientes compram de\nquem responde primeiro"), ("24/7", "seu negócio disponível\ntodos os dias, toda hora")]):
        bx = ML + i * (sw + 12)
        c.setFillColor(Color(1,1,1,0.03))
        c.roundRect(bx, y-55, sw, 58, 6, fill=1, stroke=0)
        c.setStrokeColor(Color(1,1,1,0.06)); c.setLineWidth(0.5)
        c.roundRect(bx, y-55, sw, 58, 6, fill=0, stroke=1)
        c.setFont("JBM-Bold", 20); c.setFillColor(ORANGE)
        c.drawString(bx+12, y-14, stat)
        lines = label.split("\n")
        c.setFont("Inter", 7.5); c.setFillColor(ZINC_500)
        for j, line in enumerate(lines):
            c.drawString(bx+12, y-32 - j*11, line)

    c.showPage()


# ═══════════════════════════════════════════════════════════
# PAGE 5 — DICA 3: E-mails e Orçamentos
# ═══════════════════════════════════════════════════════════

def page_tip3():
    fill_bg()
    dots(ML, MB, W-MR, H-MT, 32, 0.02)
    page_num(5)
    glow(W*0.7, H*0.3, 200, 0.02)

    y = H - MT
    y = tip_header(y, "03", "E-mails e", "Orçamentos Rápidos")

    y = labeled_block(y, "O PROBLEMA", HexColor("#ef4444"),
        "Você gasta muito tempo escrevendo e-mails formais ou explicando orçamentos. Cada resposta leva 15-20 minutos e você tem dezenas por dia.")
    y -= 8

    c.setFont("JBM-Med", 7.5); c.setFillColor(PURPLE)
    c.drawString(ML+12, y, "A SOLUÇÃO COM IA")
    y -= 16

    y = wrap("Cole as informações brutas na IA e peça para ela transformar em comunicação profissional:", ML+12, y, "Inter", 9.5, ZINC_400, CW-24, 15)
    y -= 8

    y = prompt_box(y, '"Escreva um e-mail formal e profissional para o cliente João confirmando o recebimento do pedido #1234 e informando que o prazo de entrega é de 5 dias úteis."')
    y -= 10

    y = result_box(y, "E-mails profissionais escritos em segundos, não em minutos. Sua comunicação fica padronizada e impecável.")

    y -= 12

    # More examples
    c.setFont("JBM-Med", 7); c.setFillColor(ZINC_600)
    c.drawString(ML, y, "OUTROS USOS PARA O DIA A DIA")
    y -= 18

    examples = [
        "Transformar anotações bagunçadas em propostas comerciais formatadas",
        "Criar respostas educadas para clientes insatisfeitos",
        "Gerar contratos simples a partir de condições combinadas",
        "Traduzir e-mails de fornecedores internacionais",
    ]
    for ex in examples:
        c.setFillColor(ORANGE); c.circle(ML+5, y+3, 2, fill=1, stroke=0)
        y = wrap(ex, ML+16, y, "Inter", 9, ZINC_300, CW-16, 14)
        y -= 5

    y -= 10
    c.setFillColor(Color(1,1,1,0.03))
    c.roundRect(ML, y-38, CW, 42, 6, fill=1, stroke=0)
    c.setFont("JBM-Med", 7); c.setFillColor(ORANGE)
    c.drawString(ML+12, y-4, "TEMPO ECONOMIZADO")
    c.setFont("Inter-Medium", 10); c.setFillColor(WHITE)
    c.drawString(ML+12, y-22, "Se você escreve 10 e-mails por dia, a IA te devolve ~2 horas. Por semana: 10h.")

    c.showPage()


# ═══════════════════════════════════════════════════════════
# PAGE 6 — DICA 4: Resumo de Textos
# ═══════════════════════════════════════════════════════════

def page_tip4():
    fill_bg()
    dots(ML, MB, W-MR, H-MT, 32, 0.02)
    page_num(6)
    glow(W*0.5, H*0.5, 220, 0.02)

    y = H - MT
    y = tip_header(y, "04", "Resumo de Textos", "e Contratos")

    y = labeled_block(y, "O PROBLEMA", HexColor("#ef4444"),
        "Você recebe um contrato de 20 páginas, um regulamento extenso ou um relatório enorme e não tem tempo de ler tudo agora. Mas precisa tomar uma decisão.")
    y -= 8

    c.setFont("JBM-Med", 7.5); c.setFillColor(PURPLE)
    c.drawString(ML+12, y, "A SOLUÇÃO COM IA")
    y -= 16

    y = wrap("Cole o texto inteiro na IA e peça um resumo objetivo:", ML+12, y, "Inter", 9.5, ZINC_400, CW-24, 15)
    y -= 8

    y = prompt_box(y, '"Resuma os 5 pontos mais importantes deste contrato em tópicos simples. Destaque qualquer cláusula que possa ser prejudicial."')
    y -= 10

    y = result_box(y, "Você entende o essencial em 30 segundos sem perder horas lendo. E ainda identifica os pontos de atenção.")

    y -= 12

    c.setFont("JBM-Med", 7); c.setFillColor(ZINC_600)
    c.drawString(ML, y, "FUNCIONA TAMBÉM PARA")
    y -= 18

    uses = [
        ("Atas de reunião", "Cole a gravação transcrita e peça os action items"),
        ("Pesquisas de mercado", "Extraia os dados mais relevantes de relatórios longos"),
        ("Leis e regulamentações", "Entenda o que muda para o seu negócio em linguagem simples"),
        ("Feedbacks de clientes", "Analise centenas de avaliações e identifique padrões"),
    ]
    for title, desc in uses:
        c.setFont("Inter-SemiBold", 9.5); c.setFillColor(WHITE)
        c.drawString(ML+14, y, title)
        y -= 14
        y = wrap(desc, ML+14, y, "Inter", 8.5, ZINC_500, CW-28, 13)
        y -= 10

    c.showPage()


# ═══════════════════════════════════════════════════════════
# PAGE 7 — DICA 5: Promoções e Ideias
# ═══════════════════════════════════════════════════════════

def page_tip5():
    fill_bg()
    dots(ML, MB, W-MR, H-MT, 32, 0.02)
    page_num(7)
    glow(W*0.3, H*0.6, 180, 0.025)

    y = H - MT
    y = tip_header(y, "05", "Ideias de Promoções", "e Novos Produtos")

    y = labeled_block(y, "O PROBLEMA", HexColor("#ef4444"),
        "O movimento está fraco, as vendas caíram e você não sabe qual promoção fazer. Precisa de ideias criativas, mas está sem inspiração.")
    y -= 8

    c.setFont("JBM-Med", 7.5); c.setFillColor(PURPLE)
    c.drawString(ML+12, y, "A SOLUÇÃO COM IA")
    y -= 16

    y = wrap("Descreva sua situação real e peça ideias personalizadas:", ML+12, y, "Inter", 9.5, ZINC_400, CW-24, 15)
    y -= 8

    y = prompt_box(y, '"Tenho uma loja de roupas femininas e o movimento está baixo. Me dê 5 ideias de promoções criativas e de baixo custo para atrair clientes nesta semana."')
    y -= 10

    y = result_box(y, "Chuva de ideias para movimentar seu caixa. A IA considera seu contexto e sugere ações práticas e econômicas.")

    y -= 10

    # More prompts
    c.setFont("JBM-Med", 7); c.setFillColor(ZINC_600)
    c.drawString(ML, y, "OUTROS PROMPTS PODEROSOS")
    y -= 18

    prompts = [
        '"Que tipo de produto complementar eu poderia vender para aumentar meu ticket médio?"',
        '"Crie uma promoção de indicação onde meu cliente atual traz novos clientes."',
        '"Quais datas comemorativas dos próximos 30 dias eu posso aproveitar para vender mais?"',
    ]

    for prompt in prompts:
        c.setFillColor(Color(PURPLE.red, PURPLE.green, PURPLE.blue, 0.04))
        # Measure
        words = prompt.split(); lns = []; cur = ""
        for w in words:
            t = cur + (" " if cur else "") + w
            if pdfmetrics.stringWidth(t, "Inter", 8.5) > CW-30:
                if cur: lns.append(cur)
                cur = w
            else:
                cur = t
        if cur: lns.append(cur)
        bh = 8 + len(lns) * 13
        c.roundRect(ML, y-bh+6, CW, bh+4, 4, fill=1, stroke=0)
        c.setFont("Inter", 8.5); c.setFillColor(ZINC_300)
        ty = y
        for ln in lns:
            c.drawString(ML+12, ty, ln)
            ty -= 13
        y -= bh + 8

    c.showPage()


# ═══════════════════════════════════════════════════════════
# PAGE 8 — CONCLUSÃO + CTA
# ═══════════════════════════════════════════════════════════

def page_conclusion():
    fill_bg()
    dots(ML, MB, W-MR, H-MT, 28, 0.02)
    page_num(8)
    glow(W*0.5, H*0.5, 250, 0.035)

    y = H - MT

    c.setFont("JBM-Med", 7); c.setFillColor(ORANGE)
    c.drawString(ML, y, "CONCLUSÃO")
    y -= 35

    c.setFont("Inter-Bold", 26); c.setFillColor(WHITE)
    c.drawString(ML, y, "O Próximo Passo")
    y -= 12
    grad_line(ML, y, 100, 2)
    y -= 30

    y = wrap("A Inteligência Artificial é uma ferramenta poderosa, mas o segredo está em saber como usá-la e integrá-la ao seu negócio.", ML, y, "Inter-Medium", 12, ZINC_300, CW, 19)
    y -= 15

    y = wrap("Estas 5 dicas são apenas o começo. Imagine o que acontece quando você combina IA com automação de processos, e-commerce inteligente e uma presença digital profissional.", ML, y, "Inter", 10, ZINC_400, CW, 16)
    y -= 20

    # Separator
    c.setStrokeColor(Color(1,1,1,0.06)); c.setLineWidth(0.5)
    c.line(ML, y, W-MR, y)
    y -= 25

    # Keymatic pitch
    c.setFont("JBM-Med", 7); c.setFillColor(ZINC_600)
    c.drawString(ML, y, "SOBRE A KEYMATIC")
    y -= 20

    y = wrap("Na Keymatic, nós não apenas ensinamos você a usar a IA — nós criamos as automações que fazem sua empresa funcionar de forma inteligente.", ML, y, "Inter-SemiBold", 11, WHITE, CW, 17)
    y -= 8

    y = wrap("Com 20 anos de experiência da VTS Informática, unimos tradição e inovação para entregar soluções que realmente funcionam para micro e pequenos empreendedores.", ML, y, "Inter", 10, ZINC_400, CW, 16)
    y -= 25

    # CTA Box
    cta_h = 140
    c.setFillColor(Color(ORANGE.red, ORANGE.green, ORANGE.blue, 0.05))
    c.roundRect(ML, y-cta_h+10, CW, cta_h, 10, fill=1, stroke=0)
    c.setStrokeColor(Color(ORANGE.red, ORANGE.green, ORANGE.blue, 0.2))
    c.setLineWidth(0.8)
    c.roundRect(ML, y-cta_h+10, CW, cta_h, 10, fill=0, stroke=1)

    # Orange accent bar
    c.setFillColor(ORANGE)
    c.roundRect(ML, y-cta_h+10, 4, cta_h, 2, fill=1, stroke=0)

    c.setFont("Inter-Bold", 15); c.setFillColor(WHITE)
    c.drawString(ML+22, y-8, "Quer ver como a IA pode")
    c.drawString(ML+22, y-28, "transformar sua operação?")

    c.setFont("Inter", 10); c.setFillColor(ZINC_400)
    c.drawString(ML+22, y-52, "Fale comigo no WhatsApp e vamos agendar sua")
    c.setFont("Inter-SemiBold", 10); c.setFillColor(ORANGE)
    c.drawString(ML+22, y-68, "Consultoria de IA Gratuita.")

    c.setFont("Inter", 9.5); c.setFillColor(ZINC_400)
    c.drawString(ML+22, y-88, "Vamos analisar seu negócio e te mostrar exatamente")
    c.drawString(ML+22, y-102, "onde a automação vai te economizar tempo e dinheiro.")

    y -= cta_h + 20

    # Personal sign-off
    c.setFont("Inter-SemiBold", 13); c.setFillColor(WHITE)
    c.drawString(ML, y, "Valéria")
    c.setFont("Inter", 10); c.setFillColor(ZINC_500)
    c.drawString(ML + pdfmetrics.stringWidth("Valéria", "Inter-SemiBold", 13) + 8, y+1, "— Keymatic")
    y -= 20

    # Contact row
    c.setFont("JBM-Med", 10); c.setFillColor(ORANGE)
    c.drawString(ML, y, "keymatic.com.br")
    y -= 18
    c.setFont("JBM", 10); c.setFillColor(ZINC_300)
    c.drawString(ML, y, "WhatsApp: (11) 93429-4637")

    # Bottom branding
    grad_line(ML, MB+24, CW, 1.5)
    c.setFont("JBM", 7); c.setFillColor(ZINC_700)
    c.drawString(ML, MB+6, "© 2026 Keymatic — VTS Comércio e Serviços LTDA")
    c.drawRightString(W-MR, MB+6, "20 anos transformando negócios com tecnologia")

    c.showPage()


# ═══════════════════════════════════════════════════════════
# GENERATE
# ═══════════════════════════════════════════════════════════

page_cover()
page_what_is_ai()
page_tip1()
page_tip2()
page_tip3()
page_tip4()
page_tip5()
page_conclusion()

c.save()
print(f"PDF: {OUT}")
print(f"Size: {os.path.getsize(OUT) / 1024:.1f} KB")
