import React from "react";
import styles from "./Projects.module.css";
import Card from "../../../components/Card/Card";
import Link from "next/link";

const projects = [
  {
    id: 1,
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
    id: 2,
    title: "Instalação de Ar Condicionado Residencial",
    description:
      "Instalação completa de sistema de ar condicionado em residência com 3 ambientes",
    image: "/images/Card_Projetos/Image-Exemple.jpg",
    images: [
      "/images/Card_Projetos/Image-Exemple.jpg",
      "/images/air-quality-1.jpg",
      "/images/Card_Projetos/Itau_fachada.webp",
    ],
    route: "/projetos-realizados/residencial-3-ambientes",
  },
  {
    id: 3,
    title: "Manutenção Preventiva Comercial",
    description:
      "Serviço de manutenção preventiva em estabelecimento comercial",
    image: "/images/Card_Projetos/Image-Exemple.jpg",
    images: [
      "/images/Card_Projetos/Image-Exemple.jpg",
      "/images/Card_Projetos/Image-Exemple.jpg",
      "/images/Card_Projetos/Image-Exemple.jpg",
    ],
    route: "/projetos-realizados/manutencao-preventiva",
  },
  {
    id: 4,
    title: "Projeto de Ventilação Industrial",
    description: "Implementação de sistema de ventilação industrial em galpão",
    image: "/images/air-quality-1.jpg",
    images: [
      "/images/air-quality-1.jpg",
      "/images/air-quality-1.jpg",
      "/images/air-quality-1.jpg",
    ],
    route: "/projetos-realizados/ventilacao-industrial",
  },
  {
    id: 5,
    title: "Itaú - Instalação de Ar Condicionado",
    description:
      "Projeto e instalação de sistema de ar condicionado na fachada da agência",
    image: "/images/Card_Projetos/Itau_fachada.webp",
    images: [
      "/images/Card_Projetos/Itau_fachada.webp",
      "/images/Card_Projetos/Image-Exemple.jpg",
      "/images/air-quality-1.jpg",
    ],
    route: "/projetos-realizados/itau",
  },
];

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.projectsSection}>
        <h2 className={styles.title}>Projetos Realizados</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.route}
              style={{ textDecoration: "none" }}
            >
              <Card
                image={project.image}
                title={project.title}
                description={project.description}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
