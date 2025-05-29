"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import styles from "../page.module.css";
import { useRouter, usePathname } from "next/navigation";
import { useModal } from "../layout";

interface HeaderProps {
  activeSection: string;
  isHeaderScrolled: boolean;
  handleMobileMenuClick: () => void;
  setShowSubmenu: (show: boolean) => void;
  showSubmenu: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (show: boolean) => void;
}

export function Header({
  activeSection,
  isHeaderScrolled,
  handleMobileMenuClick,
  setShowSubmenu,
  showSubmenu,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const submenuRef = useRef<HTMLLIElement>(null);
  const { setIsModalOpen } = useModal();

  const handleNavigation = (section: string) => {
    if (isHomePage) {
      // Na página principal, usa scroll suave
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        handleMobileMenuClick();
      }
    } else {
      // Em subpáginas, navega para a página principal com a seção
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
                href={isHomePage ? "#inicio" : "/#inicio"}
                className={activeSection === "inicio" ? styles.navActive : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("inicio");
                }}
              >
                Início
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href={isHomePage ? "#solucoes" : "/#solucoes"}
                className={activeSection === "solucoes" ? styles.navActive : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("solucoes");
                }}
              >
                Soluções
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href={isHomePage ? "#beneficios" : "/#beneficios"}
                className={
                  activeSection === "beneficios" ? styles.navActive : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("beneficios");
                }}
              >
                Benefícios
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href={isHomePage ? "#sobre" : "/#sobre"}
                className={activeSection === "sobre" ? styles.navActive : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("sobre");
                }}
              >
                Sobre Nós
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href={isHomePage ? "#depoimentos" : "/#depoimentos"}
                className={
                  activeSection === "depoimentos" ? styles.navActive : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("depoimentos");
                }}
              >
                Depoimentos
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href={isHomePage ? "#contato" : "/#contato"}
                className={activeSection === "contato" ? styles.navActive : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("contato");
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
