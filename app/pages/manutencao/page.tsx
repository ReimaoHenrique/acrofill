"use client";

import { motion } from "framer-motion";
import styles from "./manutencao.module.css";

export default function Manutencao() {
  return (
    <main className={styles.main}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <h1>Manutenção Preventiva</h1>

          <section className={styles.section}>
            <h2>Programa de Manutenção Preventiva</h2>
            <p>
              Nossa equipe especializada oferece programas personalizados de
              manutenção preventiva para garantir o funcionamento otimizado dos
              seus equipamentos de climatização, prolongando sua vida útil e
              evitando custos inesperados.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Nossos Serviços</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3>Inspeção Regular</h3>
                <p>
                  Avaliação periódica dos sistemas para identificar e corrigir
                  problemas antes que causem danos maiores.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>Limpeza e Higienização</h3>
                <p>
                  Limpeza profunda dos componentes e higienização dos sistemas
                  para garantir qualidade do ar e eficiência.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>Substituição de Filtros</h3>
                <p>
                  Troca programada de filtros para manter a eficiência do
                  sistema e a qualidade do ar interior.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>Ajustes e Calibração</h3>
                <p>
                  Ajustes finos e calibração dos equipamentos para garantir
                  funcionamento otimizado.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Benefícios</h2>
            <ul>
              <li>Maior vida útil dos equipamentos</li>
              <li>Redução de custos com reparos emergenciais</li>
              <li>Melhor eficiência energética</li>
              <li>Qualidade do ar garantida</li>
              <li>Conformidade com normas técnicas</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Planos Disponíveis</h2>
            <div className={styles.plansGrid}>
              <div className={styles.planCard}>
                <h3>Plano Básico</h3>
                <ul>
                  <li>Inspeção trimestral</li>
                  <li>Limpeza semestral</li>
                  <li>Substituição de filtros</li>
                  <li>Relatório de manutenção</li>
                </ul>
              </div>
              <div className={styles.planCard}>
                <h3>Plano Premium</h3>
                <ul>
                  <li>Inspeção mensal</li>
                  <li>Limpeza trimestral</li>
                  <li>Substituição de filtros</li>
                  <li>Calibração de equipamentos</li>
                  <li>Relatório detalhado</li>
                  <li>Suporte prioritário</li>
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
