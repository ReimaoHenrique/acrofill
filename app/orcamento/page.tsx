"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./orcamento.module.css";
import { ContactCard } from "../components/ContactCard/ContactCard";

export default function OrcamentoPage() {
  return (
    <main className={styles.main}>
      <Image
        src="/images/pulmao-verde.jpg"
        alt="Pulmão Verde"
        width={1920}
        height={1080}
        priority
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <h1>Solicitar Orçamento</h1>
          <p className={styles.description}>
            Desenvolvemos sistemas sob medida com foco em performance, segurança
            e automação. Entre em contato pelo WhatsApp e solicite seu orçamento
            sem compromisso.
          </p>
          <ContactCard />
        </motion.div>
      </div>
    </main>
  );
}
