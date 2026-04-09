// ═══════════════════════════════════════════════════════════
// Quiz "Tecnologia e Negócios 2026" — 20 anos VTS + Keymatic
// ═══════════════════════════════════════════════════════════

export type QuizOption = {
  id: string;
  label: string;
  emoji: string;
};

export type QuizStep = {
  id: string;
  question: string;
  subtitle?: string;
  options: QuizOption[];
};

export type QuizProfile = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  recommendation: string;
  ctaLabel: string;
  whatsappMessage: string;
  color: string;
};

export const QUIZ_STEPS: QuizStep[] = [
  {
    id: "perfil",
    question: "Como você se define hoje?",
    subtitle: "Queremos entender seu momento atual.",
    options: [
      { id: "pessoal", label: "Uso tecnologia só no pessoal", emoji: "📱" },
      { id: "autonomo", label: "Sou autônomo / freelancer", emoji: "💼" },
      { id: "empresa", label: "Tenho uma empresa", emoji: "🏢" },
      { id: "planejando", label: "Estou planejando empreender", emoji: "🚀" },
    ],
  },
  {
    id: "dor",
    question: "Qual desses problemas mais te incomoda?",
    subtitle: "Escolha o que mais pesa no seu dia a dia.",
    options: [
      { id: "tempo", label: "Falta de tempo — faço tudo sozinho", emoji: "⏰" },
      { id: "clientes", label: "Dificuldade em atrair clientes", emoji: "📢" },
      { id: "vendas", label: "Quero vender online mas não sei como", emoji: "🛒" },
      { id: "tecnologia", label: "Tecnologia me confunde", emoji: "🤯" },
    ],
  },
  {
    id: "urgencia",
    question: "Qual o seu momento agora?",
    subtitle: "Isso nos ajuda a priorizar o que importa para você.",
    options: [
      { id: "agora", label: "Preciso resolver isso agora", emoji: "🔥" },
      { id: "breve", label: "Quero começar nos próximos meses", emoji: "📅" },
      { id: "explorando", label: "Estou só explorando por enquanto", emoji: "🔍" },
    ],
  },
  {
    id: "presenca",
    question: "Como está sua presença digital?",
    subtitle: "Site, redes sociais, WhatsApp Business...",
    options: [
      { id: "boa", label: "Tenho site e redes atualizados", emoji: "✅" },
      { id: "desatualizado", label: "Tenho, mas está desatualizado", emoji: "😅" },
      { id: "nao_tem", label: "Não tenho praticamente nada", emoji: "🚫" },
    ],
  },
  {
    id: "escala",
    question: "Qual o tamanho da sua operação?",
    subtitle: "Para sugerirmos soluções no tamanho certo.",
    options: [
      { id: "solo", label: "Trabalho sozinho", emoji: "🙋" },
      { id: "pequeno", label: "Tenho de 2 a 10 pessoas", emoji: "👥" },
      { id: "medio", label: "Mais de 10 pessoas", emoji: "🏗️" },
    ],
  },
];

export type DeliveryPreference = "whatsapp" | "email";

export type QuizContactData = {
  name: string;
  whatsapp: string;
  email: string;
  delivery: DeliveryPreference;
};

export type QuizAnswers = Record<string, string>;

// ─── Profile Mapping Logic ─────────────────────────────────
export function getQuizProfile(answers: QuizAnswers): QuizProfile {
  const { perfil, dor, urgencia, presenca, escala } = answers;

  // Pronto pra Decolar: empresa + equipe + presença boa + urgência alta
  if (
    perfil === "empresa" &&
    presenca === "boa" &&
    escala !== "solo" &&
    urgencia !== "explorando"
  ) {
    return QUIZ_PROFILES.decolar;
  }

  // Negócio Invisível: tem empresa/autônomo mas sem presença digital
  if (
    (perfil === "empresa" || perfil === "autonomo") &&
    presenca === "nao_tem"
  ) {
    return QUIZ_PROFILES.invisivel;
  }

  // Profissional em Evolução: autônomo/empresa + dor de tempo ou clientes + alguma presença
  if (
    (perfil === "empresa" || perfil === "autonomo") &&
    (dor === "tempo" || dor === "clientes") &&
    presenca !== "nao_tem"
  ) {
    return QUIZ_PROFILES.evolucao;
  }

  // Default: Explorador Digital
  return QUIZ_PROFILES.explorador;
}

export const QUIZ_PROFILES: Record<string, QuizProfile> = {
  explorador: {
    id: "explorador",
    title: "Explorador Digital",
    emoji: "🧭",
    description:
      "Você está no começo da jornada digital — e isso é ótimo! Com as ferramentas certas, você pode economizar horas e alcançar mais clientes do que imagina.",
    recommendation:
      "Comece com nossa Consultoria em IA gratuita para entender o que a tecnologia pode fazer pelo seu negócio.",
    ctaLabel: "Quero minha consultoria grátis",
    whatsappMessage:
      "Olá! Fiz o quiz de 20 anos no site e meu perfil é Explorador Digital. Quero saber como começar com tecnologia no meu negócio!",
    color: "#3b82f6",
  },
  evolucao: {
    id: "evolucao",
    title: "Profissional em Evolução",
    emoji: "📈",
    description:
      "Você já tem uma base, mas está sentindo os gargalos. Automação e IA podem multiplicar seus resultados sem precisar contratar mais gente.",
    recommendation:
      "Nossa Automação Inteligente pode eliminar tarefas repetitivas e liberar seu tempo para o que realmente importa.",
    ctaLabel: "Quero automatizar meu negócio",
    whatsappMessage:
      "Olá! Fiz o quiz de 20 anos no site e meu perfil é Profissional em Evolução. Quero saber sobre automação!",
    color: "#f59e0b",
  },
  invisivel: {
    id: "invisivel",
    title: "Negócio Invisível",
    emoji: "👻",
    description:
      "Seu negócio existe, mas o mundo digital ainda não sabe. Isso significa clientes que nunca vão te encontrar. A boa notícia: dá pra mudar rápido.",
    recommendation:
      "Um E-commerce de Elite ou uma presença digital profissional pode colocar seu negócio no mapa.",
    ctaLabel: "Quero ficar visível online",
    whatsappMessage:
      "Olá! Fiz o quiz de 20 anos no site e meu perfil é Negócio Invisível. Quero criar minha presença digital!",
    color: "#ec4899",
  },
  decolar: {
    id: "decolar",
    title: "Pronto pra Decolar",
    emoji: "🚀",
    description:
      "Você já domina o básico e está pronto pra escalar. Com a estratégia certa de IA e automação, seu crescimento pode ser exponencial.",
    recommendation:
      "Vamos fazer um diagnóstico avançado para identificar os pontos de alavancagem do seu negócio.",
    ctaLabel: "Quero escalar meu negócio",
    whatsappMessage:
      "Olá! Fiz o quiz de 20 anos no site e meu perfil é Pronto pra Decolar. Quero um diagnóstico avançado!",
    color: "#a855f7",
  },
};

// ─── Quiz Banner Config ────────────────────────────────────
export const QUIZ_BANNER_KEY = "keymatic-quiz-20anos";
export const QUIZ_BANNER_DELAY_MS = 5000;
