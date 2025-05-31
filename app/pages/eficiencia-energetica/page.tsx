"use client";

import { motion } from "framer-motion";
import styles from "./eficiencia-energetica.module.css";

export default function EficienciaEnergetica() {
  return (
    <main className={styles.main}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <h1>Eficiência Energética</h1>

          <section className={styles.section}>
            <h2>Otimização do Consumo de Energia</h2>
            <p>
              Nossas soluções de eficiência energética são projetadas para
              reduzir significativamente o consumo de energia em seus sistemas
              de climatização, resultando em economia substancial e menor
              impacto ambiental.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Benefícios</h2>
            <ul>
              <li>Redução de até 30% no consumo de energia</li>
              <li>Retorno do investimento em curto prazo</li>
              <li>Menor impacto ambiental</li>
              <li>Sistemas mais eficientes e duráveis</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Nossas Soluções</h2>
            <div className={styles.solutionsGrid}>
              <div className={styles.solutionCard}>
                <h3>Análise de Consumo</h3>
                <p>
                  Avaliação detalhada do consumo atual e identificação de
                  oportunidades de otimização.
                </p>
              </div>
              <div className={styles.solutionCard}>
                <h3>Modernização de Sistemas</h3>
                <p>
                  Atualização de equipamentos para tecnologias mais eficientes e
                  sustentáveis.
                </p>
              </div>
              <div className={styles.solutionCard}>
                <h3>Monitoramento Inteligente</h3>
                <p>
                  Sistemas de controle e monitoramento para gestão eficiente do
                  consumo de energia.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
