"use client";

import { motion } from "framer-motion";
import styles from "./solutions.module.css";
import CompareSlider from "@/app/components/CompareSlider/CompareSlider";
import { SolutionCard } from "@/app/components/SolutionCard/SolutionCard";

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
        <CompareSlider
          imagemSemFiltro="/images/CompareSlider/sem-filtro.jpeg"
          imagemComFiltro="/images//CompareSlider/com-filtro.jpeg"
          posicaoInicial={40}
          altura="500px"
          largura="750px"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.solutionsGrid}
        >
          <SolutionCard
            title="Filtros Industriais Avançados"
            description="Nossos filtros industriais utilizam tecnologia de ponta para capturar até 99,97% das micropartículas presentes no ar. Desenvolvidos com materiais de alta durabilidade, garantem eficiência contínua mesmo em ambientes com alta concentração de poluentes."
            hasIcon={true}
            iconDelay={0.5}
            buttonText="Conhecer Filtros"
            buttonLink="/produtos/filtros"
          />

          <SolutionCard
            title="Conformidade técnica não é luxo: É norma"
            description="Conforto, eficiência e saúde dependem
             da conformidade com a NBR 16401. Essa norma define os padrões 
             mínimos para qualidade do ar e conforto térmico, prevenindo alergias,
              doenças respiratórias e desconfortos no ambiente de trabalho.
               Seu sistema de ar-condicionado está adequado a essas exigências? "
            hasIcon={true}
            iconDelay={0.5}
            buttonText="Saiba mais sobre a NBR 16401"
            buttonLink="/normas/nbr-16401"
          />

          <SolutionCard
            title="Sua empresa está seguindo a NBR 16401?"
            description="Garanta a conformidade do seu sistema de ar-condicionado e evite problemas futuros, inclusive direitos trabalhistas.
Agende uma consultoria especializada com nosso time de engenharia e assegure conforto, saúde e segurança para seu ambiente."
            hasIcon={true}
            iconDelay={1}
            buttonText="Agendar Consultoria"
            onButtonClick={() => {
              // Aqui você pode adicionar a lógica para abrir um modal de agendamento
              // ou redirecionar para uma página de contato
              window.location.href = "/contato";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
