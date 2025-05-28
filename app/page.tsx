"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { useScrollPosition } from "./hooks/useScrollPosition";
import styles from "./page.module.css";

// Importando os componentes
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home as HomeSection } from "./Pages/Home/home";
import { Solutions } from "./Pages/Home/Solutions/solutions";
import { Benefits } from "./Pages/Home/Benefits/benefits";
import { Testimonials } from "./Pages/Home/Testimonials/testimonials";
import { About } from "./Pages/Home/About/about";
import { Contact } from "./Pages/Home/Contact/contact";
import { OrcamentoModal } from "./components/EmailCapturePopup/OrcamentoModal";
import Projects from "./Pages/Home/Projects/Projects";

export default function HomePage() {
  // Hook personalizado para navegação com offset ajustado
  const { activeSection, scrollY, scrollProgress } = useScrollPosition({
    offset: 150,
    includeProgress: true,
  });

  // Estado para controle do header
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para atualizar o estado do header baseado no scroll
  useEffect(() => {
    setIsHeaderScrolled(scrollY > 50);
  }, [scrollY]);

  // Referências para elementos que terão efeito de parallax
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);

  // Efeito de parallax para a seção hero
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(heroScrollY, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroScrollY, [0, 0.5], [1, 0]);

  // Efeito de parallax para a seção de benefícios
  const { scrollYProgress: benefitsScrollY } = useScroll({
    target: benefitsRef,
    offset: ["start end", "end start"],
  });

  const benefitsScale = useTransform(benefitsScrollY, [0, 0.5], [0.8, 1]);
  const benefitsOpacity = useTransform(benefitsScrollY, [0, 0.3], [0, 1]);

  // Estados para controle dos modais e menus
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Função para fechar o menu mobile
  const handleMobileMenuClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Dados dos projetos
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Indústria Têxtil Progresso",
        coverImage: "/images/filtro-ar.jpg",
        images: [
          "/images/filtro-ar.jpg",
          "/images/air-quality-1.jpg",
          "/images/filtro-ar.jpg",
        ],
        description:
          "Implementação de sistema completo de filtragem de ar em ambiente industrial, reduzindo em 95% a concentração de partículas no ar.",
        details: {
          area: "2.500m²",
          duration: "3 meses",
          result: "Redução de 95% de partículas",
        },
        fullDescription:
          "Projeto completo de implementação de sistema de filtragem industrial na Indústria Têxtil Progresso. O sistema incluiu a instalação de filtros de alta eficiência, monitoramento em tempo real e treinamento da equipe. A redução significativa de partículas no ar resultou em um ambiente mais saudável para os colaboradores e maior eficiência nos processos produtivos.",
      },
      {
        id: 2,
        title: "Metalúrgica Avançada",
        coverImage: "/images/air-quality-1.jpg",
        images: [
          "/images/air-quality-1.jpg",
          "/images/filtro-ar.jpg",
          "/images/air-quality-1.jpg",
        ],
        description:
          "Sistema de monitoramento em tempo real da qualidade do ar com integração a controles automáticos de filtragem.",
        details: {
          area: "1.800m²",
          duration: "2 meses",
          result: "Conformidade total com NR-15",
        },
        fullDescription:
          "Implementação de sistema avançado de monitoramento e controle de qualidade do ar na Metalúrgica Avançada. O projeto incluiu a instalação de sensores de última geração, integração com sistema de controle automático e dashboard personalizado para monitoramento em tempo real. O resultado garantiu conformidade total com as normas regulamentadoras e melhorias significativas na qualidade do ambiente de trabalho.",
      },
      {
        id: 3,
        title: "Química Industrial BR",
        coverImage: "/images/filtro-ar.jpg",
        images: [
          "/images/filtro-ar.jpg",
          "/images/air-quality-1.jpg",
          "/images/filtro-ar.jpg",
        ],
        description:
          "Consultoria completa em insalubridade com implementação de soluções personalizadas para controle de poluentes químicos.",
        details: {
          area: "3.200m²",
          duration: "4 meses",
          result: "Eliminação de insalubridade",
        },
        fullDescription:
          "Projeto de consultoria e implementação de soluções para controle de poluentes químicos na Química Industrial BR. O trabalho incluiu análise completa do ambiente, identificação de pontos críticos, desenvolvimento de soluções personalizadas e implementação de sistemas de filtragem específicos para cada tipo de poluente. O resultado foi a eliminação completa da insalubridade no ambiente de trabalho.",
      },
    ],
    []
  );

  return (
    <div className={styles.page}>
      {/* Indicador de progresso do scroll */}
      <div
        className={styles.scrollProgress}
        style={{ "--scroll": `${scrollProgress}%` } as React.CSSProperties}
      />

      <Header
        activeSection={activeSection}
        isHeaderScrolled={isHeaderScrolled}
        handleMobileMenuClick={handleMobileMenuClick}
        setShowSubmenu={setShowSubmenu}
        showSubmenu={showSubmenu}
        setIsModalOpen={setIsModalOpen}
        setShowWhatsappTooltip={setShowWhatsappTooltip}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main>
        <HomeSection heroY={heroY} heroOpacity={heroOpacity} />
        <Solutions />
        <Projects />
        <Benefits
          benefitsScale={benefitsScale}
          benefitsOpacity={benefitsOpacity}
        />
        <Testimonials />
        <About />
        <Contact />

        {/* Modais */}
        <OrcamentoModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </main>

      <Footer />
    </div>
  );
}
