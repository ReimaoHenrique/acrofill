import styles from "./page.module.css";
import { SolutionCard } from "../../components/SolutionCard";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

const FilterImage = [
  {
    src: "/images/FilterImage/Filtros2.jpg",
    alt: "Filtro 2",
  },
  {
    src: "/images/FilterImage/Filtros6.jpg",
    alt: "Filtro 6",
  },
];

export default function FiltrosPage() {
  return (
    <>
      <header className={styles.headerCarousel}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerText}>
            Mais que um filtro. Um salto de eficiência comprovado.
          </h1>
          <p className={styles.headerText}>
            Destaque os diferenciais técnicos e comerciais
          </p>
        </div>
      </header>

      <div className={styles.container}>
        <SolutionCard icon="📊" title="Comparativo Técnico" variant="dark">
          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>Filtro Tradicional</th>
                  <th>Concorrentes</th>
                  <th>AcroFiltro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Eficiência de Filtragem</td>
                  <td>85-95%</td>
                  <td>96%</td>
                  <td className={styles.highlight}>99,3%</td>
                </tr>
                <tr>
                  <td>Retenção de Microplásticos</td>
                  <td>Baixa</td>
                  <td>Média</td>
                  <td className={styles.highlight}>Alta</td>
                </tr>
                <tr>
                  <td>Resistência a Altas Temperaturas</td>
                  <td>Média</td>
                  <td>Média</td>
                  <td className={styles.highlight}>Alta (até 120°C)</td>
                </tr>
                <tr>
                  <td>Facilidade de Limpeza</td>
                  <td>Requer desmontagem</td>
                  <td>Média</td>
                  <td className={styles.highlight}>Alta – sem ferramentas</td>
                </tr>
                <tr>
                  <td>Vida Útil</td>
                  <td>3 meses</td>
                  <td>4-5 meses</td>
                  <td className={styles.highlight}>6-8 meses</td>
                </tr>
                <tr>
                  <td>Economia de Energia</td>
                  <td>Padrão</td>
                  <td>3-5%</td>
                  <td className={styles.highlight}>8-12%</td>
                </tr>
                <tr>
                  <td>Certificações</td>
                  <td>INMETRO</td>
                  <td>INMETRO</td>
                  <td className={styles.highlight}>INMETRO + ISO 16890</td>
                </tr>
                <tr>
                  <td>Manutenção Técnica</td>
                  <td>Especializada</td>
                  <td>Média</td>
                  <td className={styles.highlight}>Simplificada</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.technicalText}>
            <p>
              Enquanto a maioria dos filtros industriais atinge no máximo 95% de
              eficiência, nossos modelos foram testados em campo, atingindo
              99,3% de retenção, inclusive contra micropartículas invisíveis a
              olho nu. A diferença não está apenas nos números, mas nos
              resultados: menos trocas, menor consumo de energia e mais proteção
              para os equipamentos.
            </p>
          </div>

          <button className={styles.ctaButton}>
            Solicitar Demonstração Técnica
          </button>
        </SolutionCard>

        <SolutionCard
          icon="🧪"
          title="Comprovado em Indústrias Reais"
          variant="default"
        >
          <ul>
            <li>Estudos de caso com indicadores: antes e depois</li>
            <li>Depoimentos de engenheiros/responsáveis técnicos</li>
            <li>
              Dados reais de uso: tempo de vida útil, economia, eficiência
              medida
            </li>
            <li>
              Setores atendidos com provas: automotivo, farmacêutico,
              alimentício etc.
            </li>
          </ul>
          <p>
            &ldquo;Na Metalúrgica XYZ, nossos filtros aumentaram a eficiência da
            ventilação em 34% e reduziram a necessidade de troca mensal para um
            ciclo de 6 meses.&rdquo;
          </p>
          <ImageCarousel images={FilterImage} autoPlayInterval={6000} />
        </SolutionCard>

        <SolutionCard icon="🏭" title="Aplicações Industriais">
          <ul>
            <li>Alimentícia: evita contaminações por partículas suspensas</li>
            <li>Farmacêutica: mantém ambiente controlado com grau médico</li>
            <li>Automotiva: protege equipamentos de precisão</li>
            <li>
              Agronegócio: filtra poeira e pólen no processo de secagem e
              armazenamento
            </li>
            <li>Metalurgia: reduz acúmulo de partículas metálicas no ar</li>
          </ul>
        </SolutionCard>

        <SolutionCard icon="🔬" title="Tecnologia Exclusiva">
          <ul>
            <li>Explicação das camadas filtrantes</li>
            <li>
              Materiais utilizados (polipropileno, carvão ativado,
              antimicrobianos)
            </li>
            <li>Como a construção facilita a limpeza</li>
            <li>
              Imagens técnicas ou animações de corte transversal do filtro
            </li>
          </ul>
        </SolutionCard>

        <SolutionCard icon="🔧" title="Manutenção Facilitada">
          <ul>
            <li>Sistema de encaixe rápido</li>
            <li>Manual de instalação e limpeza</li>
            <li>Tempo médio de limpeza ou troca</li>
            <li>Vídeo demonstrativo</li>
          </ul>
        </SolutionCard>

        <SolutionCard icon="📄" title="Downloads Técnicos" variant="dark">
          <ul>
            <li>Fichas técnicas (em PDF)</li>
            <li>Certificações</li>
            <li>Estudos de caso completos</li>
            <li>Documentos comparativos de performance</li>
          </ul>
          <button className={styles.downloadButton}>
            Baixar Documentação Completa
          </button>
        </SolutionCard>
      </div>
    </>
  );
}
