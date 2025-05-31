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
        source: "/filtro",
        destination: "/pages/filtro",
      },
    ];
  },
};

export default nextConfig;
