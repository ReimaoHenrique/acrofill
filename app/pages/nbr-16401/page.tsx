"use client";

import styles from "./page.module.css";

export default function Nbr16401() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>NBR 16401</h1>
        <h2>
          Acessibilidade em edificações, mobiliário, espaços e equipamentos
          urbanos
        </h2>
      </div>

      <div className={styles.content}>
        <section className={styles.carouselSection}>
          <h2>Objetivo</h2>
          <p>
            Esta Norma estabelece critérios e parâmetros técnicos a serem
            observados quando do projeto, construção, instalação e adaptação de
            edificações, mobiliário, espaços e equipamentos urbanos às condições
            de acessibilidade.
          </p>
        </section>

        <section className={styles.carouselSection}>
          <h2>Campo de Aplicação</h2>
          <p>
            Esta Norma se aplica a edificações de uso coletivo, públicas ou
            privadas, e seus equipamentos e mobiliários, bem como aos espaços
            urbanos, incluindo mobiliário urbano, equipamentos e instalações.
          </p>
        </section>

        <section className={styles.carouselSection}>
          <h2>Partes da Norma</h2>
          <div className={styles.normParts}>
            <div className={styles.normPart}>
              <h3>NBR 16401-1</h3>
              <p>Requisitos gerais</p>
              <ul>
                <li>Termos e definições</li>
                <li>Requisitos gerais de acessibilidade</li>
                <li>Dimensionamento de espaços</li>
              </ul>
            </div>
            <div className={styles.normPart}>
              <h3>NBR 16401-2</h3>
              <p>Mobiliário, espaços e equipamentos urbanos</p>
              <ul>
                <li>Mobiliário urbano</li>
                <li>Equipamentos urbanos</li>
                <li>Instalações urbanas</li>
              </ul>
            </div>
            <div className={styles.normPart}>
              <h3>NBR 16401-3</h3>
              <p>Comunicação e sinalização</p>
              <ul>
                <li>Sinalização tátil</li>
                <li>Sinalização visual</li>
                <li>Sinalização sonora</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.carouselSection}>
          <h2>Requisitos Técnicos</h2>
          <div className={styles.requirements}>
            <div className={styles.requirement}>
              <h3>Ar Condicionado</h3>
              <ul>
                <li>Altura mínima de instalação: 2,20 m do piso</li>
                <li>Distância mínima entre unidades: 1,50 m</li>
                <li>
                  Área de alcance para controle: entre 0,80 m e 1,20 m do piso
                </li>
                <li>Controles devem ser visíveis e acessíveis</li>
                <li>Evitar instalação em áreas de circulação</li>
                <li>Unidades não devem obstruir rotas acessíveis</li>
                <li>Manutenção deve ser acessível (altura máxima de 1,80 m)</li>
              </ul>
            </div>
            <div className={styles.requirement}>
              <h3>Circulação</h3>
              <ul>
                <li>Largura mínima de corredores: 1,20 m</li>
                <li>Largura mínima de portas: 0,80 m</li>
                <li>Rampas com inclinação máxima de 8,33%</li>
              </ul>
            </div>
            <div className={styles.requirement}>
              <h3>Sanitários</h3>
              <ul>
                <li>Cabine acessível: 1,50 m x 1,50 m</li>
                <li>Altura do vaso sanitário: 0,43 m a 0,45 m</li>
                <li>Barras de apoio horizontais e verticais</li>
              </ul>
            </div>
            <div className={styles.requirement}>
              <h3>Mobiliário</h3>
              <ul>
                <li>Altura de mesas: 0,75 m a 0,85 m</li>
                <li>Altura de balcões: 0,75 m a 0,85 m</li>
                <li>Espaço livre para aproximação: 0,80 m</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
