"use client";

import styles from "../page.module.css";
import { useRouter, usePathname } from "next/navigation";

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleNavigation = (section: string) => {
    if (isHomePage) {
      // Na página principal, usa scroll suave
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Em subpáginas, navega para a página principal com a seção
      router.push(`/#${section}`);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h2>AirTech</h2>
            <p>Ar puro, produtividade garantida</p>
          </div>
          <div className={styles.footerLinks}>
            <h3>Links Rápidos</h3>
            <ul>
              <li>
                <a
                  href={isHomePage ? "#inicio" : "/#inicio"}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("inicio");
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href={isHomePage ? "#solucoes" : "/#solucoes"}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("solucoes");
                  }}
                >
                  Soluções
                </a>
              </li>
              <li>
                <a
                  href={isHomePage ? "#sobre" : "/#sobre"}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("sobre");
                  }}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href={isHomePage ? "#contato" : "/#contato"}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("contato");
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerContact}>
            <h3>Contato</h3>
            <p>contato@airtech.com.br</p>
            <p>(11) 99999-9999</p>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              © 2025 AirTech. Todos os direitos reservados.
            </p>
            <div className={styles.developedBy}>
              <a
                href="https://datasynk.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.developerLink}
              >
                <span>Desenvolvido por</span>
                <img
                  src="data:image/svg+xml,%3Csvg width='633' height='477' viewBox='0 0 633 477' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M438.532 66.6987L577.795 63.4213C599.573 62.9105 617.779 79.9789 618.715 101.772L632.028 421.092C632.964 443.183 615.822 461.826 593.746 462.72L274.428 476.043L376.472 114.882C384.341 86.9169 409.523 67.3798 438.532 66.6987Z' fill='%23155DFC'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M200.841 409.174L45.3718 412.834C28.6977 413.217 14.7885 400.192 14.1079 383.507L0.0284641 45.5441C-0.694648 28.646 12.449 14.3868 29.2932 13.7058L358.012 0L254.096 367.843C247.333 391.807 225.725 408.578 200.841 409.174Z' fill='%23155DFC'/%3E%3Cpath d='M192.376 81.4686L94.2457 188.178C85.3557 197.84 85.9512 212.951 95.6494 221.847L118.406 242.788C128.062 251.684 143.162 251.089 152.052 241.384L229.212 157.446C249.672 135.185 248.226 100.538 225.98 80.0214C216.324 71.168 201.266 71.7639 192.376 81.4686Z' fill='%23281E28'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M213.176 230.785L232.318 248.407C242.058 257.388 242.696 272.541 233.721 282.331L216.111 301.485C207.136 311.232 191.993 311.871 182.21 302.89L163.069 285.268C153.328 276.287 152.69 261.134 161.665 251.344L179.275 232.19C188.25 222.443 203.436 221.804 213.176 230.785Z' fill='%23281E28'/%3E%3Cpath d='M438.149 399.809L545.765 282.757C552.061 275.946 551.593 265.305 544.787 259.006L511.694 228.529C504.888 222.23 494.254 222.698 487.959 229.508L410.799 313.446C387.702 338.559 389.318 377.676 414.414 400.788C421.262 407.045 431.854 406.62 438.149 399.809Z' fill='%23281E28'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M427.303 250.11L397.74 222.911C390.849 216.569 390.424 205.885 396.762 198.99L423.942 169.407C430.28 162.512 440.957 162.086 447.848 168.428L477.41 195.627C484.301 201.969 484.726 212.653 478.388 219.548L451.208 249.131C444.87 255.984 434.151 256.409 427.303 250.11Z' fill='%23281E28'/%3E%3C/svg%3E%0A"
                  alt="Logo"
                  className={styles.developerLogo}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
