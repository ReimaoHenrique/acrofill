"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import styles from "../page.module.css";

interface HeaderProps {
  activeSection: string;
  isHeaderScrolled: boolean;
  handleMobileMenuClick: () => void;
  setShowSubmenu: (show: boolean) => void;
  showSubmenu: boolean;
  setIsModalOpen: (show: boolean) => void;
  setShowWhatsappTooltip: (show: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (show: boolean) => void;
}

export function Header({
  activeSection,
  isHeaderScrolled,
  handleMobileMenuClick,
  setShowSubmenu,
  showSubmenu,
  setIsModalOpen,
  setShowWhatsappTooltip,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: HeaderProps) {
  const submenuRef = useRef<HTMLLIElement>(null);

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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.logo}
          >
            <h1>AirTech</h1>
          </motion.div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`${styles.hamburger} ${
                isMobileMenuOpen ? styles.active : ""
              }`}
            ></span>
          </button>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${styles.navLinks} ${
              isMobileMenuOpen ? styles.mobileMenuOpen : ""
            }`}
          >
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href="#inicio"
                className={activeSection === "inicio" ? styles.navActive : ""}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("inicio")
                    ?.scrollIntoView({ behavior: "smooth" });
                  handleMobileMenuClick();
                }}
              >
                Início
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href="#solucoes"
                className={activeSection === "solucoes" ? styles.navActive : ""}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("solucoes")
                    ?.scrollIntoView({ behavior: "smooth" });
                  handleMobileMenuClick();
                }}
              >
                Soluções
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href="#beneficios"
                className={
                  activeSection === "beneficios" ? styles.navActive : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("beneficios")
                    ?.scrollIntoView({ behavior: "smooth" });
                  handleMobileMenuClick();
                }}
              >
                Benefícios
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href="#sobre"
                className={activeSection === "sobre" ? styles.navActive : ""}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("sobre")
                    ?.scrollIntoView({ behavior: "smooth" });
                  handleMobileMenuClick();
                }}
              >
                Sobre Nós
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href="#depoimentos"
                className={
                  activeSection === "depoimentos" ? styles.navActive : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("depoimentos")
                    ?.scrollIntoView({ behavior: "smooth" });
                  handleMobileMenuClick();
                }}
              >
                Depoimentos
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href="#contato"
                className={activeSection === "contato" ? styles.navActive : ""}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" });
                  handleMobileMenuClick();
                }}
              >
                Contato
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className={styles.submenuContainer}
              ref={submenuRef}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSubmenu(!showSubmenu);
                  handleMobileMenuClick();
                }}
              >
                Solicitar Orçamento
              </a>
              <AnimatePresence>
                {showSubmenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={styles.submenu}
                  >
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowSubmenu(false);
                        handleMobileMenuClick();
                      }}
                      className={styles.submenuItem}
                      onMouseEnter={() => setShowWhatsappTooltip(true)}
                      onMouseLeave={() => setShowWhatsappTooltip(false)}
                    >
                      <span className={styles.submenuIcon}>
                        <Image
                          src="/images/whatsapp.svg"
                          alt="WhatsApp"
                          width={24}
                          height={24}
                        />
                      </span>
                      <div className={styles.submenuText}>
                        <span>WhatsApp</span>
                      </div>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsModalOpen(true);
                        setShowSubmenu(false);
                        handleMobileMenuClick();
                      }}
                      className={styles.submenuItem}
                    >
                      <span className={styles.submenuIcon}>✉️</span>
                      <div className={styles.submenuText}>
                        <span>Email</span>
                        <small>Esta opção abrirá um formulário</small>
                      </div>
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </header>
  );
}
