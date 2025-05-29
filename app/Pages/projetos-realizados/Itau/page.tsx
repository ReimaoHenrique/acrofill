"use client";

import styles from "./page.module.css";
import CompareSlider from "@/app/components/CompareSlider/CompareSlider";

export default function ItauPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projeto Itaú</h1>
      <div className={styles.content}>
        <CompareSlider
          imagemSemFiltro="/images/CompareSlider/sem_filtro.jpeg"
          imagemComFiltro="/images/CompareSlider/com_filtro.jpeg"
          titulo="Comparação com e sem Filtro de Ar"
          descricao="Deslize para ver a diferença na qualidade do ar após a instalação do nosso filtro"
          posicaoInicial={40}
          altura="500px"
          largura="100%"
        />
      </div>
    </div>
  );
}
