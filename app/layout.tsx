"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState, useEffect, createContext, useContext } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Criar contexto para o modal
interface ModalContextType {
  isModalOpen: boolean;
  setIsModalOpen: (show: boolean) => void;
}

const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export const useModal = () => useContext(ModalContext);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    // Lidar com navegação via hash na URL
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          // Pequeno delay para garantir que a página carregou completamente
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(hash);
          }, 100);
        }
      }
    };

    // Executar na montagem do componente
    handleHashNavigation();

    // Adicionar listener para mudanças no hash
    window.addEventListener("hashchange", handleHashNavigation);
    return () => window.removeEventListener("hashchange", handleHashNavigation);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeaderScrolled(scrollPosition > 50);

      // Atualizar seção ativa baseado no scroll
      const sections = [
        "inicio",
        "solucoes",
        "beneficios",
        "sobre",
        "depoimentos",
        "contato",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            // Atualizar o hash na URL sem causar scroll
            if (window.location.hash !== `#${section}`) {
              window.history.replaceState(null, "", `#${section}`);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="Pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
          <Header
            activeSection={activeSection}
            isHeaderScrolled={isHeaderScrolled}
            handleMobileMenuClick={handleMobileMenuClick}
            setShowSubmenu={setShowSubmenu}
            showSubmenu={showSubmenu}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          {children}
          <Footer />
        </ModalContext.Provider>
      </body>
    </html>
  );
}
