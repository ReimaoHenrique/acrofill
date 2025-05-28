"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./about.module.css";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Henrique Cruz",
    role: "Engenheiro Mecânico",
    image: "/images/Henrique-Cruz.jpeg",
    description:
      "Especialista em sistemas de filtragem industrial com mais de 15 anos de experiência no desenvolvimento de soluções para qualidade do ar.",
  },
  {
    id: 2,
    name: "Henrique Reimão",
    role: "Fundador",
    image: "/images/Henrique Reimao.jpeg",
    description:
      "Visionário que iniciou a AirTech com o objetivo de transformar ambientes industriais em espaços mais saudáveis e produtivos através da tecnologia.",
  },
  {
    id: 3,
    name: "Paulo Comedor de Traveco",
    role: "Diretor de Vendas e Marketing",
    image: "/images/paulo.enc",
    description:
      "Responsável por desenvolver estratégias inovadoras de mercado e garantir que nossas soluções atendam perfeitamente às necessidades dos clientes.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export function About() {
  return (
    <section id="sobre" className={styles.about + " section"}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.sectionTitle}
        >
          Sobre Nós
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 3rem",
          }}
        >
          A AirTech nasceu da visão de transformar ambientes industriais em
          espaços mais saudáveis e produtivos. Nossa equipe de especialistas
          combina conhecimento técnico e paixão por inovação para desenvolver
          soluções que realmente fazem a diferença na qualidade do ar e na vida
          das pessoas.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.teamGrid}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className={styles.teamMember}
            >
              <div className={styles.memberImage}>
                <Image
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p>
                  <strong>{member.role}</strong>
                </p>
                <p>{member.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
