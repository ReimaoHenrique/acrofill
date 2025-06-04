"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import { useScroll, useTransform } from "framer-motion";

// Importando os componentes
import { Home as HomeSection } from "./pages/Home/home";
import { Solutions as SolutionsSection } from "./pages/Home/Solutions/solutions";
import { Benefits as BenefitsSection } from "./pages/Home/Benefits/benefits";
import About from "./pages/Home/About/about";
import { Testimonials as TestimonialsSection } from "./pages/Home/Testimonials/testimonials";
import { Contact as ContactSection } from "./pages/Home/Contact/contact";

export default function Home() {
  const { scrollY } = useScroll();

  // Valores de animação para o HomeSection
  const heroY = useTransform(scrollY, [0, 300], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Valores de animação para o BenefitsSection
  const benefitsScale = useTransform(scrollY, [800, 1200], [0.8, 1]);
  const benefitsOpacity = useTransform(scrollY, [800, 1200], [0, 1]);

  useEffect(() => {
    // Verificar se há um hash na URL ao carregar a página
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Pequeno delay para garantir que a página carregou completamente
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <main className={styles.main}>
      <HomeSection heroY={heroY} heroOpacity={heroOpacity} />
      <SolutionsSection />
      <BenefitsSection
        benefitsScale={benefitsScale}
        benefitsOpacity={benefitsOpacity}
      />
      <About />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
