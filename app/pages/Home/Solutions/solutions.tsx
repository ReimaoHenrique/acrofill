"use client";

import { motion } from "framer-motion";
import styles from "./solutions.module.css";
import CompareSlider from "@/app/components/CompareSlider/CompareSlider";
import { SolutionCard } from "@/app/components/SolutionCard/SolutionCard";
import {
  FilterIcon,
  EnergyIcon,
  MaintenanceIcon,
  InnovationIcon,
  ComplianceIcon,
  ConsultingIcon,
} from "@/app/components/Icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
            title="Conformidade técnica não é luxo: É norma"
            description="Conforto, eficiência e saúde dependem da conformidade com a NBR 16401. Essa norma define os padrões mínimos para qualidade do ar e conforto térmico, prevenindo alergias, doenças respiratórias e desconfortos no ambiente de trabalho. Seu sistema de ar-condicionado está adequado a essas exigências?"
            hasIcon={true}
            icon={<ComplianceIcon size={32} />}
            buttonText="Saiba mais sobre a NBR 16401"
            buttonLink="/nbr-16401"
          />

          <SolutionCard
            title="Sua empresa está seguindo a NBR 16401?"
            description="Garanta a conformidade do seu sistema de ar-condicionado e evite problemas futuros, inclusive direitos trabalhistas. Agende uma consultoria especializada com nosso time de engenharia e assegure conforto, saúde e segurança para seu ambiente."
            hasIcon={true}
            icon={<ConsultingIcon size={32} />}
            buttonText="Agendar Consultoria"
            onButtonClick={() => {
              window.location.href = "#contato";
            }}
          />

          <SolutionCard
            title="Filtros Industriais Avançados"
            description="Nossos filtros industriais utilizam tecnologia de ponta para capturar até 99,97% das micropartículas presentes no ar. Desenvolvidos com materiais de alta durabilidade, garantem eficiência contínua mesmo em ambientes com alta concentração de poluentes."
            hasIcon={true}
            icon={<FilterIcon size={32} />}
            buttonText="Conhecer Filtros"
            buttonLink="/filtros"
          />

          <SolutionCard
            title="Eficiência Energética"
            description="Otimize o consumo de energia com nossas soluções inteligentes. Reduza custos operacionais e contribua para a sustentabilidade ambiental com sistemas de alta performance."
            hasIcon={true}
            icon={<EnergyIcon size={32} />}
            buttonText="Saiba Mais"
            buttonLink="/eficiencia-energetica"
          />

          <SolutionCard
            title="Manutenção Preventiva"
            description="Programas personalizados de manutenção preventiva para garantir o funcionamento otimizado dos seus equipamentos. Minimize paradas não programadas e maximize a vida útil dos sistemas."
            hasIcon={true}
            icon={<MaintenanceIcon size={32} />}
            buttonText="Plano de Manutenção"
            buttonLink="/manutencao"
          />

          <SolutionCard
            title="Inovação Tecnológica"
            description="Estamos sempre à frente com as mais recentes tecnologias em climatização e qualidade do ar. Nossas soluções incorporam as últimas inovações do mercado."
            hasIcon={true}
            icon={<InnovationIcon size={32} />}
            buttonText="Inovação"
            buttonLink="/filtros#Inovação Tecnológica"
          />
        </motion.div>
      </div>
    </section>
  );
}
