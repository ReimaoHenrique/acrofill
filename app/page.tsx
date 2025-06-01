"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollPosition } from "./hooks/useScrollPosition";
import styles from "./page.module.css";
import { useModal } from "./layout";

// Importando os componentes
import { Home as HomeSection } from "./pages/Home/home";
import { Solutions } from "./pages/Home/Solutions/solutions";
import { Benefits } from "./pages/Home/Benefits/benefits";
import { Testimonials } from "./pages/Home/Testimonials/testimonials";
import About from "./pages/Home/About/about";
import { Contact } from "./pages/Home/Contact/contact";
import { OrcamentoModal } from "./components/EmailCapturePopup/OrcamentoModal";
import Projects from "./pages/Home/Projects/Projects";

export default function HomePage() {
  const { isModalOpen, setIsModalOpen } = useModal();

  // Hook personalizado para navegação
  const { scrollProgress } = useScrollPosition({
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

  return (
    <div className={styles.page}>
      {/* Indicador de progresso do scroll */}
      <div
        className={styles.scrollProgress}
        style={{ "--scroll": `${scrollProgress}%` } as React.CSSProperties}
      />

      <main>
        <HomeSection
          heroY={parallaxEffects.hero.y}
          heroOpacity={parallaxEffects.hero.opacity}
        />
        <Solutions />
        <Projects />
        <Benefits
          benefitsScale={parallaxEffects.benefits.scale}
          benefitsOpacity={parallaxEffects.benefits.opacity}
        />
        <Testimonials />
        <About />
        <Contact />

        <OrcamentoModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </main>
    </div>
  );
}
