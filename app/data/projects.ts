export interface Project {
  title: string;
  description: string;
  image: string;
  images: string[];
  route: string;
}

export const projects: Project[] = [
  {
    title: "Itaú - Instalação de Ar Condicionado",
    description:
      "Projeto e instalação de sistema de ar condicionado na fachada da agência",
    image: "/images/Card_Projetos/Itau_fachada.webp",
    images: [
      "/images/Card_Projetos/Itau_fachada.webp",
      "/images/Card_Projetos/Image-Exemple.jpg",
      "/images/air-quality-1.jpg",
    ],
    route: "/Pages/projetos-realizados/Itau",
  },
  {
    title: "Instalação de Ar Condicionado Residencial",
    description:
      "Instalação completa de sistema de ar condicionado em residência com 3 ambientes",
    image: "/images/Card_Projetos/Image-Exemple.jpg",
    images: [
      "/images/Card_Projetos/Image-Exemple.jpg",
      "/images/air-quality-1.jpg",
      "/images/Card_Projetos/Itau_fachada.webp",
    ],
    route: "/Pages/projetos-realizados/Itau",
  },
  {
    title: "Manutenção Preventiva Comercial",
    description:
      "Serviço de manutenção preventiva em estabelecimento comercial",
    image: "/images/Card_Projetos/Image-Exemple.jpg",
    images: [
      "/images/Card_Projetos/Image-Exemple.jpg",
      "/images/Card_Projetos/Image-Exemple.jpg",
      "/images/Card_Projetos/Image-Exemple.jpg",
    ],
    route: "/Pages/projetos-realizados/Itau",
  },
  {
    title: "Projeto de Ventilação Industrial",
    description: "Implementação de sistema de ventilação industrial em galpão",
    image: "/images/air-quality-1.jpg",
    images: [
      "/images/air-quality-1.jpg",
      "/images/air-quality-1.jpg",
      "/images/air-quality-1.jpg",
    ],
    route: "/Pages/projetos-realizados/Itau",
  },
  {
    title: "Itaú - Instalação de Ar Condicionado",
    description:
      "Projeto e instalação de sistema de ar condicionado na fachada da agência",
    image: "/images/Card_Projetos/Itau_fachada.webp",
    images: [
      "/images/Card_Projetos/Itau_fachada.webp",
      "/images/Card_Projetos/Image-Exemple.jpg",
      "/images/air-quality-1.jpg",
    ],
    route: "/Pages/projetos-realizados/Itau",
  },
];
