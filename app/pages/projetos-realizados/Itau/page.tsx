"use client";

import styles from "./page.module.css";
import CompareSlider from "@/app/components/CompareSlider/CompareSlider";
import ImageCarousel from "@/app/components/ImageCarousel/ImageCarousel";

export default function ItauPage() {
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
      <h1 className={styles.title}>Projeto Itaú</h1>
      <div className={styles.content}>
        <ImageCarousel images={imagensCarousel} autoPlayInterval={4000} />

        <CompareSlider
          imagemSemFiltro="/images/CompareSlider/sem-filtro.jpeg"
          imagemComFiltro="/images/CompareSlider/com-filtro.jpeg"
          titulo="Comparação com e sem Filtro de Ar"
          descricao="Deslize para ver a diferença na qualidade do ar após a instalação do nosso filtro"
          posicaoInicial={40}
          largura="100%"
        />

        <div className={styles.carouselSection}>
          <h2>Galeria de Imagens</h2>
        </div>
      </div>
    </div>
  );
}
