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
import { projects } from "./data/projects";

export default function HomePage() {
  // Estados consolidados
  const [uiState, setUiState] = useState({
    isHeaderScrolled: false,
    isMobileMenuOpen: false,
    isModalOpen: false,
    showSubmenu: false,
    showWhatsappTooltip: false,
  });

  // Hook personalizado para navegação
  const { activeSection, scrollY, scrollProgress } = useScrollPosition({
    offset: 150,
    includeProgress: true,
  });

  // Referências para parallax
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);

  // Efeitos de parallax simplificados
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: benefitsScrollY } = useScroll({
    target: benefitsRef,
    offset: ["start end", "end start"],
  });

  const parallaxEffects = {
    hero: {
      y: useTransform(heroScrollY, [0, 1], [0, 200]),
      opacity: useTransform(heroScrollY, [0, 0.5], [1, 0]),
    },
    benefits: {
      scale: useTransform(benefitsScrollY, [0, 0.5], [0.8, 1]),
      opacity: useTransform(benefitsScrollY, [0, 0.3], [0, 1]),
    },
  };

  // Atualização do header baseado no scroll
  useEffect(() => {
    setUiState((prev) => ({ ...prev, isHeaderScrolled: scrollY > 50 }));
  }, [scrollY]);

  // Handlers simplificados
  const handleMobileMenuClick = useCallback(() => {
    setUiState((prev) => ({ ...prev, isMobileMenuOpen: false }));
  }, []);

  const updateUiState = useCallback(
    (key: keyof typeof uiState, value: boolean) => {
      setUiState((prev) => ({ ...prev, [key]: value }));
    },
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
        isHeaderScrolled={uiState.isHeaderScrolled}
        handleMobileMenuClick={handleMobileMenuClick}
        setShowSubmenu={(value) => updateUiState("showSubmenu", value)}
        showSubmenu={uiState.showSubmenu}
        setIsModalOpen={(value) => updateUiState("isModalOpen", value)}
        setShowWhatsappTooltip={(value) =>
          updateUiState("showWhatsappTooltip", value)
        }
        isMobileMenuOpen={uiState.isMobileMenuOpen}
        setIsMobileMenuOpen={(value) =>
          updateUiState("isMobileMenuOpen", value)
        }
      />

      <main>
        <HomeSection
          heroY={parallaxEffects.hero.y}
          heroOpacity={parallaxEffects.hero.opacity}
        />
        <Solutions />
        <Projects projects={projects} />
        <Benefits
          benefitsScale={parallaxEffects.benefits.scale}
          benefitsOpacity={parallaxEffects.benefits.opacity}
        />
        <Testimonials />
        <About />
        <Contact />

        <OrcamentoModal
          isModalOpen={uiState.isModalOpen}
          setIsModalOpen={(value) => updateUiState("isModalOpen", value)}
        />
      </main>

      <Footer />
    </div>
  );
}
