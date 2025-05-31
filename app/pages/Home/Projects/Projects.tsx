"use client";

import React from "react";
import styles from "./Projects.module.css";
import Card from "../../../components/Card/Card";
import Link from "next/link";
import projectsData from "../../../data/projects.json";

export default function Projects() {
  return (
    <section id="projetos" className={styles.projects + " section"}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Projetos Realizados</h2>
        <div className={styles.projectsGrid}>
          {projectsData.projects.map((project) => (
            <Link href={project.route} key={project.id}>
              <Card
                title={project.title}
                description={project.description}
                image={project.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
