"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import styles from "./CompareSlider.module.css";

interface CompareSliderProps {
  imagemSemFiltro: string;
  imagemComFiltro: string;
  titulo?: string;
  descricao?: string;
  posicaoInicial?: number;
  largura?: string;
}

export default function CompareSlider({
  imagemSemFiltro,
  imagemComFiltro,
  titulo,
  descricao,
  posicaoInicial = 50,
  largura = "100%",
}: CompareSliderProps) {
  return (
    <div className={styles.container}>
      {titulo && <h2 className={styles.titulo}>{titulo}</h2>}
      {descricao && <p className={styles.descricao}>{descricao}</p>}
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={imagemSemFiltro}
            alt="Imagem sem filtro"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={imagemComFiltro}
            alt="Imagem com filtro"
          />
        }
        className={styles.slider}
        position={posicaoInicial}
        style={{
          width: "100%",
          maxWidth: largura,
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
