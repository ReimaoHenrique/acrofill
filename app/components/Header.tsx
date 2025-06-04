"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { Logo } from "./Header/Logo";
import { MobileMenu } from "./Header/MobileMenu";
import { NavLinks } from "./Header/NavLinks";
import { motion } from "framer-motion";

interface HeaderProps {
  activeSection: string;
  isHeaderScrolled: boolean;
  handleMobileMenuClick: () => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (show: boolean) => void;
}

export function Header({
  activeSection,
  isHeaderScrolled,
  handleMobileMenuClick,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleNavigation = (section: string) => {
    if (isHomePage) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        handleMobileMenuClick();
      }
    } else {
      router.push(`/#${section}`);
      handleMobileMenuClick();
    }
  };

  // Fechar menu mobile quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector(`.${styles.navLinks}`);
      const mobileButton = document.querySelector(
        `.${styles.mobileMenuButton}`
      );

      if (
        isMobileMenuOpen &&
        mobileMenu &&
        mobileButton &&
        !mobileMenu.contains(event.target as Node) &&
        !mobileButton.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  // Controlar o scroll do body quando o menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("menuOpen");
    } else {
      document.body.classList.remove("menuOpen");
    }

    return () => {
      document.body.classList.remove("menuOpen");
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`${styles.header} ${isHeaderScrolled ? styles.scrolled : ""}`}
    >
      <div className="container">
        <nav className={styles.nav}>
          <Logo />

          <NavLinks
            activeSection={activeSection}
            isHomePage={isHomePage}
            handleNavigation={handleNavigation}
            handleMobileMenuClick={handleMobileMenuClick}
            isMobileMenuOpen={isMobileMenuOpen}
          />

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/orcamento"
            className={styles.orcamentoButton}
            onClick={handleMobileMenuClick}
          >
            Solicitar Orçamento
          </motion.a>

          <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </nav>
      </div>
    </header>
  );
}
