"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./home.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

interface HomeProps {
  heroY: any;
  heroOpacity: any;
}

export function Home({ heroY, heroOpacity }: HomeProps) {
  return (
    <section id="inicio" className={styles.home}>
      <div className="container">
        <motion.div
          className={styles.homeContent}
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className={styles.homeText}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Soluções Inteligentes para Qualidade do Ar Industrial
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transforme seu ambiente industrial com sistemas avançados de
              filtragem de ar. Garantimos ar limpo, produtividade elevada e
              conformidade com as normas regulamentadoras.
            </motion.p>
            <motion.div
              className={styles.ctaButtons}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => {
                    document
                      .getElementById("contato")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Solicitar Orçamento
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => {
                    document
                      .getElementById("solucoes")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Conhecer Soluções
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className={styles.homeImage}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.homeImageContainer}>
              <Image
                src="/images/filtro-ar.jpg"
                alt="Sistema de filtragem de ar industrial"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
