"use client";

import { useEffect, useState } from "react";
import { useScrollPosition } from "./hooks/useScrollPosition";
import styles from "./page.module.css";
import { useModal } from "./components/EmailCapturePopup/ModalContext";

// Importando os componentes
import { Home as HomeSection } from "./pages/Home/home";
import { Solutions as SolutionsSection } from "./pages/Home/Solutions/solutions";
import { Benefits as BenefitsSection } from "./pages/Home/Benefits/benefits";
import About from "./pages/Home/About/about";
import { Testimonials as TestimonialsSection } from "./pages/Home/Testimonials/testimonials";
import { Contact as ContactSection } from "./pages/Home/Contact/contact";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <HomeSection />
      <SolutionsSection />
      <BenefitsSection />
      <About />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
