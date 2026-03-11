export const WHATSAPP_NUMBER = "5511934294637";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Keymatic e gostaria de saber mais sobre as soluções.";

export const NAV_LINKS = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Cases", href: "#cases" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
] as const;

export const TRUST_STATS = [
  { value: 20, suffix: "+", label: "Anos de mercado" },
  { value: 200, suffix: "+", label: "Projetos entregues" },
  { value: 99.9, suffix: "%", label: "Uptime garantido" },
  { value: 50, suffix: "+", label: "Clientes ativos" },
] as const;

export const SOLUTIONS = [
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    title: "E-commerce de Elite",
    pain: "Sua loja cai em dia de lançamento?",
    description:
      "Lojas virtuais rápidas, seguras e prontas para grandes lançamentos (Drops). Checkout integrado, gestão de estoque inteligente e performance que aguenta qualquer pico.",
    features: [
      "Checkout otimizado para conversão",
      "Sistema de Drops com fila inteligente",
      "Gestão de estoque em tempo real",
      "Integração com Melhor Envio",
    ],
    cta: "Quero uma loja que aguenta o tranco",
  },
  {
    id: "automacao",
    icon: "Bot",
    title: "Automação Inteligente",
    pain: "Quanto você perde por não responder às 3h da manhã?",
    description:
      "Recuperação de vendas, atendimento 24h e eliminação de tarefas repetitivas. WhatsApp integrado ao seu banco de dados para respostas inteligentes e contextuais.",
    features: [
      "Atendimento 24/7 via WhatsApp",
      "Recuperação automática de carrinho",
      "Integração direta com banco de dados",
      "Fluxos personalizados por segmento",
    ],
    cta: "Quero automatizar meu atendimento",
  },
  {
    id: "consultoria-ia",
    icon: "Brain",
    title: "Consultoria em IA",
    pain: "Sua equipe gasta 6h no que a IA faz em 6 minutos?",
    description:
      "Treinamento de equipes e implementação de Inteligência Artificial personalizada. Transforme horas de trabalho manual em minutos de produtividade mensurável.",
    features: [
      "Diagnóstico gratuito de processos",
      "Implementação de IA sob medida",
      "Treinamento prático da equipe",
      "ROI mensurável desde o dia 1",
    ],
    cta: "Quero um diagnóstico de IA",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Diagnóstico",
    description: "Analisamos sua operação e identificamos oportunidades de automação e crescimento.",
  },
  {
    step: 2,
    title: "Proposta",
    description: "Apresentamos um plano personalizado com cronograma, investimento e ROI esperado.",
  },
  {
    step: 3,
    title: "Execução",
    description: "Desenvolvemos e implantamos a solução com acompanhamento semanal de progresso.",
  },
  {
    step: 4,
    title: "Evolução",
    description: "Monitoramento contínuo, suporte dedicado e evolução constante da sua operação.",
  },
] as const;

export const CASES = [
  {
    client: "VTS Informática",
    segment: "Tecnologia & Serviços de TI",
    url: "https://site.vts.com.br/",
    color: "blue",
    metrics: [
      { label: "Anos de operação", before: "—", after: "20+" },
      { label: "Presença digital", before: "Básica", after: "Completa" },
      { label: "Serviços integrados", before: "3", after: "8+" },
    ],
    testimonial:
      "De assistência técnica a automação com IA e desenvolvimento web — a VTS é a prova viva de que tradição e inovação caminham juntas.",
    author: "VTS Informática, desde 1998",
  },
  {
    client: "Guaradise",
    segment: "E-commerce de Moda",
    url: "https://www.guaradise.com.br",
    color: "violet",
    metrics: [
      { label: "Tempo de carregamento", before: "4.2s", after: "0.9s" },
      { label: "Taxa de conversão", before: "1.2%", after: "3.8%" },
      { label: "Vendas em Drops", before: "Manual", after: "Automático" },
    ],
    testimonial:
      "Com a infraestrutura da Keymatic, nossa loja de roupas ganhou performance e estabilidade para aguentar lançamentos sem cair.",
    author: "Equipe Guaradise",
  },
  {
    client: "Comunidade da Graça São Mateus",
    segment: "Presença Digital Institucional",
    url: "https://www.cgsaomateus.com.br",
    color: "cyan",
    metrics: [
      { label: "Canais integrados", before: "1", after: "5+" },
      { label: "Alcance mensal", before: "Local", after: "Regional" },
      { label: "Engajamento", before: "Baixo", after: "Alto" },
    ],
    testimonial:
      "O site conectou nossa comunidade ao digital — YouTube, redes sociais e WhatsApp integrados em uma plataforma profissional e acolhedora.",
    author: "Comunidade da Graça São Mateus",
  },
  {
    client: "Treinamento de IA para Empreendedores",
    segment: "Consultoria & Educação em IA",
    url: null,
    color: "emerald",
    metrics: [
      { label: "Participantes", before: "—", after: "100+" },
      { label: "Redução de tarefas manuais", before: "—", after: "70%" },
      { label: "Satisfação", before: "—", after: "98%" },
    ],
    testimonial:
      "Mais de 100 micro empreendedores treinados em Inteligência Artificial prática. Resultado: equipes mais produtivas desde o primeiro dia.",
    author: "Programa de Capacitação Keymatic",
  },
] as const;

export const TECH_STACK = [
  { name: "Django 6.0", category: "Backend", status: "operational" },
  { name: "PostgreSQL 16", category: "Database", status: "operational" },
  { name: "Redis 7", category: "Cache", status: "operational" },
  { name: "Celery", category: "Tasks", status: "operational" },
  { name: "Evolution API", category: "WhatsApp", status: "operational" },
  { name: "Melhor Envio", category: "Logística", status: "operational" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Quanto custa criar um e-commerce com a Keymatic?",
    answer:
      "Cada projeto é único. Após o diagnóstico gratuito, apresentamos uma proposta personalizada com valores transparentes, sem custos ocultos. Trabalhamos com planos que cabem no orçamento de micro e pequenas empresas.",
  },
  {
    question: "O que é automação inteligente de WhatsApp?",
    answer:
      "É a integração do WhatsApp Business com o banco de dados da sua empresa. Diferente de chatbots genéricos, nossas automações acessam dados reais — estoque, pedidos, agendamentos — para responder com contexto e precisão.",
  },
  {
    question: "Preciso de conhecimento técnico para usar as soluções?",
    answer:
      "Não. Todas as nossas soluções incluem treinamento da equipe e um painel administrativo intuitivo. Você gerencia tudo sem precisar escrever uma linha de código.",
  },
  {
    question: "Como funciona a consultoria de IA?",
    answer:
      "Começamos com um diagnóstico gratuito dos processos da sua empresa. Identificamos tarefas repetitivas que podem ser automatizadas com IA, implementamos as soluções e treinamos sua equipe para usar no dia a dia.",
  },
  {
    question: "Meus dados ficam seguros?",
    answer:
      "Segurança é prioridade. Utilizamos PostgreSQL com criptografia, autenticação de dois fatores (2FA), backups diários automáticos e estamos em total conformidade com a LGPD.",
  },
  {
    question: "Qual a diferença entre a Keymatic e uma agência comum?",
    answer:
      "Agências entregam sites. Nós entregamos sistemas de crescimento. Com 20 anos de experiência da VTS, construímos infraestrutura robusta que escala com seu negócio — não apenas uma página bonita.",
  },
  {
    question: "Vocês atendem empresas de qual tamanho?",
    answer:
      "Focamos em micro e pequenas empresas que querem crescer com tecnologia. Se você fatura entre R$ 10k e R$ 500k por mês e sente que está perdendo vendas ou tempo, somos para você.",
  },
  {
    question: "Como é o suporte pós-implantação?",
    answer:
      "Oferecemos suporte contínuo com planos mensais que incluem monitoramento 24/7, atualizações de segurança, otimizações de performance e canal direto via WhatsApp para urgências.",
  },
] as const;
