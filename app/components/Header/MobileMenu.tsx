"use client";

import styles from "./Header.module.css";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (show: boolean) => void;
}

export function MobileMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMenuProps) {
  return (
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
  );
}
