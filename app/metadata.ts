import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AirTech - Filtros de Ar Industrial",
  description:
    "Soluções em filtros de ar industrial para sua empresa. Ar puro, produtividade garantida.",
  keywords: [
    "filtros de ar",
    "ar industrial",
    "qualidade do ar",
    "filtros industriais",
    "AirTech",
  ],
  authors: [{ name: "AirTech" }],
  creator: "AirTech",
  publisher: "AirTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const siteConfig = {
  name: "AcroFill",
  description: "Sistema inteligente de filtros de ar para sua empresa",
  url: "https://acrofill.com",
  ogImage: "https://acrofill.com/og.jpg",
  links: {
    twitter: "https://twitter.com/acrofill",
    github: "https://github.com/acrofill",
  },
};

export type SiteConfig = typeof siteConfig;
