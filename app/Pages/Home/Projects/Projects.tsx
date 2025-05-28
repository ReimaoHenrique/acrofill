import React from "react";
import styles from "./Projects.module.css";
import Card from "../../../components/Card/Card";
import Link from "next/link";
import { Project } from "../../../data/projects";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className={styles.container}>
      <section className={styles.projectsSection}>
        <h2 className={styles.title}>Projetos Realizados</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <Link
              key={index}
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
