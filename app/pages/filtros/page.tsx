"use client";

import styles from "./page.module.css";
import CompareSlider from "@/app/components/CompareSlider/CompareSlider";
import ImageCarousel from "@/app/components/ImageCarousel/ImageCarousel";
import { InnovationIcon } from "@/app/components/Icons";

export default function FiltrosPage() {
  const imagensCarousel = [
    {
      src: "/images/CompareSlider/sem-filtro.jpeg",
      alt: "Imagem sem filtro de ar",
    },
    {
      src: "/images/CompareSlider/com-filtro.jpeg",
      alt: "Imagem com filtro de ar",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Filtros Industriais</h1>
      <div className={styles.content}>
        <ImageCarousel images={imagensCarousel} autoPlayInterval={4000} />

        <CompareSlider
          imagemSemFiltro="/images/CompareSlider/sem-filtro.jpeg"
          imagemComFiltro="/images/CompareSlider/com-filtro.jpeg"
          titulo="Comparação com e sem Filtro de Ar"
          descricao="Deslize para ver a diferença na qualidade do ar após a instalação do nosso filtro"
          posicaoInicial={40}
          altura="500px"
          largura="100%"
        />

        <section id="Inovação Tecnológica" className={styles.innovationSection}>
          <div className={styles.innovationContent}>
            <div className={styles.innovationHeader}>
              <InnovationIcon size={48} />
              <h2>Inovação Tecnológica</h2>
            </div>
            <p className={styles.innovationDescription}>
              Estamos sempre à frente com as mais recentes tecnologias em
              filtragem e qualidade do ar. Nossos filtros incorporam as últimas
              inovações do mercado, garantindo:
            </p>
            <div className={styles.innovationGrid}>
              <div className={styles.innovationCard}>
                <h3>Alta Eficiência</h3>
                <p>Captura de até 99,97% das micropartículas presentes no ar</p>
              </div>
              <div className={styles.innovationCard}>
                <h3>Durabilidade</h3>
                <p>Materiais de alta resistência para maior vida útil</p>
              </div>
              <div className={styles.innovationCard}>
                <h3>Sustentabilidade</h3>
                <p>Filtros eco-friendly com menor impacto ambiental</p>
              </div>
              <div className={styles.innovationCard}>
                <h3>Smart Filtration</h3>
                <p>Sistemas inteligentes de monitoramento e controle</p>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.carouselSection}>
          <h2>Galeria de Imagens</h2>
        </div>
      </div>
    </div>
  );
}
