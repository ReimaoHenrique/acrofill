export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Henrique Cruz",
    role: "Engenheiro Mecânico",
    image: "/images/Henrique-Cruz.jpeg",
    description:
      "Especialista em sistemas de filtragem industrial com mais de 15 anos de experiência no desenvolvimento de soluções para qualidade do ar.",
  },
  {
    name: "Henrique Reimão",
    role: "Fundador",
    image: "/images/Henrique Reimao.jpeg",
    description:
      "Visionário que iniciou a AirTech com o objetivo de transformar ambientes industriais em espaços mais saudáveis e produtivos através da tecnologia.",
  },
  {
    name: "Paulo Traveco",
    role: "Diretor de Vendas e Marketing",
    image: "/images/paulo.enc",
    description:
      "Responsável por desenvolver estratégias inovadoras de mercado e garantir que nossas soluções atendam perfeitamente às necessidades dos clientes.",
  },
];
