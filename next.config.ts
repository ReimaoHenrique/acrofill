import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/projetos-realizados/Itau",
        destination: "/pages/projetos-realizados/Itau",
      },
      {
        source: "/projetos-realizados/Deciclo",
        destination: "/pages/projetos-realizados/Deciclo",
      },
      {
        source: "/filtros",
        destination: "/pages/filtros",
      },
      {
        source: "/nbr-16401",
        destination: "/pages/nbr-16401",
      },
      {
        source: "/eficiencia-energetica",
        destination: "/pages/eficiencia-energetica",
      },
      {
        source: "/manutencao",
        destination: "/pages/manutencao",
      },
    ];
  },
};

export default nextConfig;
