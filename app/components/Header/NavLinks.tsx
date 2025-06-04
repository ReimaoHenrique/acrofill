"use client";

import { motion } from "framer-motion";
import styles from "./Header.module.css";

interface NavLinksProps {
  activeSection: string;
  isHomePage: boolean;
  handleNavigation: (section: string) => void;
  handleMobileMenuClick: () => void;
  isMobileMenuOpen: boolean;
}

export function NavLinks({
  activeSection,
  isHomePage,
  handleNavigation,
  isMobileMenuOpen,
}: NavLinksProps) {
  // Array com todos os itens do menu de navegação
  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "solucoes", label: "Soluções" },
    { id: "beneficios", label: "Benefícios" },
    { id: "sobre", label: "Sobre" },
    { id: "depoimentos", label: "Depoimentos" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`${styles.navLinks} ${
        isMobileMenuOpen ? styles.mobileMenuOpen : ""
      }`}
    >
      {navItems.map((item) => (
        <motion.li key={item.id} whileHover={{ scale: 1.05 }}>
          <a
            href={isHomePage ? `#${item.id}` : `/#${item.id}`}
            className={activeSection === item.id ? styles.navActive : ""}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation(item.id);
            }}
          >
            {item.label}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
