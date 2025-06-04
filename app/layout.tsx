"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";
import { siteConfig } from "./metadata";
import { EmailCapturePopup } from "./components/EmailCapturePopup/EmailCapturePopup";
import { ModalProvider } from "./components/EmailCapturePopup/ModalContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <html lang="pt-BR">
      <head>
        <title>{`${siteConfig.name} - ${siteConfig.description}`}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta property="og:url" content={siteConfig.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.name} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={siteConfig.ogImage} />
      </head>
      <body className={inter.className}>
        <ModalProvider>
          <Header
            activeSection={activeSection}
            isHeaderScrolled={isHeaderScrolled}
            handleMobileMenuClick={handleMobileMenuClick}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          {children}
          <Footer />
          <EmailCapturePopup />
        </ModalProvider>
      </body>
    </html>
  );
}
