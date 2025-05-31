"use client";

import { motion } from "framer-motion";
import { ContactCard } from "@/app/components/ContactCard/ContactCard";
import styles from "./contact.module.css";

export function Contact() {
  return (
    <section id="contato" className={styles.contact}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.contactHeader}
        >
          <h2 className={styles.title}>Entre em Contato</h2>
          <p className={styles.subtitle}>
            Estamos prontos para ajudar sua empresa a respirar melhor
          </p>
        </motion.div>

        <ContactCard />
      </div>
    </section>
  );
}
