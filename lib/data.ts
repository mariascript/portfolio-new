export const githubUser = "mariascript";

export const profile = {
  name: "Maria Pereira",
  role: "Desenvolvedora Full Stack",
  email: "m.marques23@hotmail.com",
  city: "Recife, PE",
  intro:
    "Estudante de Sistemas para Internet em Recife. Desenvolvo projetos que conectam lógica de programação, APIs, bancos de dados e interfaces, buscando criar aplicações funcionais e bem estruturadas.",
  about:
    "Estudo Sistemas para Internet na Universidade Católica de Pernambuco e desenvolvo projetos com JavaScript, Java, React, Node.js e SQL. Nas residências tecnológicas, participei de projetos colaborativos de UX/UI e desenvolvimento de software. Minha experiência anterior na área administrativa contribuiu para minha organização, atenção aos detalhes e capacidade de analisar processos.",
  socials: {
    github: `https://github.com/${githubUser}`,
    linkedin: "https://www.linkedin.com/in/maria-pereira-16084537a/",
    cv: "/curriculo1.pdf",
  },
};

export const nav = [
  { href: "/", label: "#home" },
  { href: "/sobre", label: "#sobre" },
  { href: "/profissional", label: "#profissional" },
  { href: "/projetos", label: "#projetos" },
  { href: "/contato", label: "#contato" },
];

export const jobs = [
  {
    company: "Beyond Co. · Residência Tecnológica",
    period: "03/2026 – 06/2026",
    role: "UX/UI Designer & Front-end Developer",
    bullets: [
      "Projeto MiAumigos, plataforma de adoção responsável de pets.",
      "Desenhei a experiência: fluxos de descoberta, match e acompanhamento pós-adoção.",
      "Implementei a interface com React, Tailwind CSS e TanStack Router.",
    ],
  },
  {
    company: "Porto Digital · Residência Tecnológica",
    period: "10/2025 – 12/2025",
    role: "Projeto TekoKids",
    bullets: [
      "Solução educacional alinhada à ODS 4, Educação de Qualidade.",
      "Protótipo de alta fidelidade no Figma e definição dos fluxos de usuário.",
    ],
  },
  {
    company: "Hapvida NotreDame Intermédica",
    period: "05/2023 – 04/2025",
    role: "Jovem Aprendiz",
    bullets: [
      "Atendimento ao cliente via SAC e suporte às rotinas administrativas.",
      "Organização e análise de dados com Excel e Power BI, além de relatórios.",
    ],
  },
];

export const education = {
  course: "Sistemas para Internet",
  school: "Universidade Católica de Pernambuco",
  period: "2025 – cursando",
};

export const certificates = [
  { title: "Introdução a Java", issuer: "Alura" },
  { title: "Engenharia de Prompt", issuer: "Rocketseat" },
  { title: "ServiceNow Developer", issuer: "SkillUp & edX · 25h" },
  { title: "Lógica de Programação", issuer: "Alura" },
];

export const projects = [
  {
    title: "MiAumigos",
    description: "Plataforma de adoção responsável de pets, com fluxos de descoberta, match e acompanhamento pós-adoção.",
    tags: ["React", "Tailwind CSS", "TanStack Router", "Figma"],
    repo: "",
    demo: "",
  },
  {
    title: "DC Dashboard",
    description:
      "Dashboard interativo de personagens do universo DC, com cadastro em nuvem, busca na SuperHero API, gráficos de distribuição e popularidade e tema claro/escuro.",
    tags: ["React", "Vite", "Chart.js", "Back4App", "SuperHero API"],
    repo: "",
    demo: "",
  },
  {
    title: "TekoKids",
    description:
      "Plataforma educacional para crianças e professores, que apoia a alfabetização com leitura guiada corrigida por IA em tempo real, jogos de compreensão leitora e relatórios pedagógicos.",
    tags: ["Figma", "UX/UI", "Prototipação", "Fluxos de usuário"],
    repo: "",
    demo: "",
  },
];

export const stacks = [
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { group: "Backend", items: ["Node.js", "Express", "Spring Boot", "Java"] },
  { group: "Linguagens", items: ["JavaScript", "TypeScript", "Java", "SQL"] },
  { group: "Banco de dados", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { group: "Ferramentas", items: ["Git", "GitHub", "Figma", "Trello", "Miro"] },
];

export const appTech = [
  { name: "Next.js 14", use: "Framework com App Router, rotas por pasta e renderização no servidor." },
  { name: "React 18", use: "Biblioteca de interface e componentes." },
  { name: "TypeScript", use: "Tipagem estática em todo o projeto." },
  { name: "Tailwind CSS", use: "Estilização utilitária e tema roxo personalizado." },
  { name: "shadcn/ui", use: "Padrão de componentes (Button, Card, Badge)." },
  { name: "Radix UI (Slot)", use: "Primitivo de composição usado no Button." },
  { name: "class-variance-authority", use: "Variantes de componentes." },
  { name: "clsx + tailwind-merge", use: "Combinação segura de classes CSS." },
  { name: "lucide-react", use: "Ícones." },
  { name: "next/font", use: "Space Grotesk para textos e JetBrains Mono para rótulos." },
  { name: "Open-Meteo API", use: "Clima atual de Recife exibido no widget ao lado do cabeçalho." },
  { name: "Vercel", use: "Hospedagem e deploy." },
];
