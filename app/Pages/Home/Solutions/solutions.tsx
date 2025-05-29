"use client";

import { motion } from "framer-motion";
import styles from "./solutions.module.css";

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

export function Solutions() {
  return (
    <section id="solucoes" className={styles.solutions + " section"}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.sectionTitle}
        >
          Inovação em Filtragem
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.solutionsGrid}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className={styles.solutionCard}
          >
            <div className={styles.cardIcon}>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={styles.iconPlaceholder}
              ></motion.div>
            </div>
            <h3>Filtros Industriais Avançados</h3>
            <p>
              Nossos filtros industriais utilizam tecnologia de ponta para
              capturar até 99,97% das micropartículas presentes no ar.
              Desenvolvidos com materiais de alta durabilidade, garantem
              eficiência contínua mesmo em ambientes com alta concentração de
              poluentes.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className={styles.solutionCard}
          >
            <div className={styles.cardIcon}>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className={styles.iconPlaceholder}
              ></motion.div>
            </div>
            <h3>Sistemas de Monitoramento</h3>
            <p>
              Monitore a qualidade do ar em tempo real com nossos sistemas
              inteligentes. Acompanhe dados de concentração de partículas,
              umidade e temperatura através de painéis intuitivos, permitindo
              ajustes imediatos quando necessário para manter o ambiente sempre
              saudável.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className={styles.solutionCard}
          >
            <div className={styles.cardIcon}>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className={styles.iconPlaceholder}
              ></motion.div>
            </div>
            <h3>Consultoria em Insalubridade</h3>
            <p>
              Nossa equipe de especialistas realiza análises completas do
              ambiente de trabalho, identificando fontes de poluição e
              desenvolvendo estratégias personalizadas para adequação às normas
              regulamentadoras, reduzindo riscos à saúde e aumentando a
              produtividade.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
