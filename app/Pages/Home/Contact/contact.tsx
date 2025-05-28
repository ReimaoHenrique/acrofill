"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./contact.module.css";
import Image from "next/image";

export function Contact() {
  const [contactOption, setContactOption] = useState("email");

  return (
    <section id="contato" className={styles.contact + " section"}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.sectionTitle}
        >
          Entre em Contato
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.contactOptions}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setContactOption("email")}
            className={`${styles.contactOption} ${
              contactOption === "email" ? styles.contactOptionActive : ""
            }`}
          >
            Email
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setContactOption("whatsapp")}
            className={`${styles.contactOption} ${
              contactOption === "whatsapp" ? styles.contactOptionActive : ""
            }`}
          >
            WhatsApp
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.contactContent}
        >
          {contactOption === "email" && (
            <div className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" placeholder="Seu nome completo" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu.email@empresa.com.br"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  placeholder="Como podemos ajudar sua empresa?"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.button}
              >
                Enviar Mensagem
              </motion.button>
            </div>
          )}

          {contactOption === "whatsapp" && (
            <div className={styles.whatsappContact}>
              <p>
                Entre em contato diretamente pelo WhatsApp para um atendimento
                mais rápido:
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <Image
                  src="/images/whatsapp.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                />
                Falar no WhatsApp
              </motion.a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
