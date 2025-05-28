export interface AccordionItem {
  id: number;
  title: string;
  content: string;
  image: string;
}

export const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "Sua empresa está dentro das normas da ANVISA e ABNT?",
    content:
      "Garantimos que sua empresa esteja em total conformidade com as normas da ANVISA e ABNT, evitando multas e processos trabalhistas. Nossas soluções são desenvolvidas seguindo rigorosamente todas as diretrizes regulamentares.",
    image: "/images/pulmao-verde.jpg",
  },
  {
    id: 2,
    title: "Ambiente mais saudável com menos propagação de vírus",
    content:
      "Nossos sistemas de filtragem de ar reduzem significativamente a propagação de vírus e bactérias, criando um ambiente mais seguro e saudável para seus colaboradores. A qualidade do ar impacta diretamente na saúde e produtividade da equipe.",
    image: "/images/pulmao-verde.jpg",
  },
  {
    id: 3,
    title: "Plano de Manutenção, Operação e Controle (PMOC) atualizado",
    content:
      "Desenvolvemos e mantemos um PMOC completo e atualizado para sua empresa, garantindo a eficiência contínua dos sistemas de climatização e qualidade do ar. Este plano é essencial para a conformidade legal e eficiência operacional.",
    image: "/images/pulmao-verde.jpg",
  },
  {
    id: 4,
    title: "Filtros de ar de alta eficiência",
    content:
      "Utilizamos filtros de ar de última geração, capazes de reter partículas microscópicas e garantir a pureza do ar em seu ambiente industrial. Nossos filtros são certificados e oferecem máxima eficiência na filtragem.",
    image: "/images/pulmao-verde.jpg",
  },
  {
    id: 5,
    title: "Relatórios técnicos e laudos periódicos",
    content:
      "Fornecemos relatórios técnicos detalhados e laudos periódicos que documentam a qualidade do ar e o desempenho dos sistemas. Estes documentos são essenciais para auditorias e comprovação de conformidade.",
    image: "/images/pulmao-verde.jpg",
  },
];
