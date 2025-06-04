"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./orcamento.module.css";

export default function OrcamentoPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <h1>Solicitar Orçamento</h1>
          <p className={styles.description}>
            Escolha a melhor forma de entrar em contato conosco
          </p>

          <div className={styles.contactOptions}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={styles.contactCard}
            >
              <div className={styles.cardHeader}>
                <Image
                  src="/images/whatsapp.svg"
                  alt="WhatsApp"
                  width={32}
                  height={32}
                />
                <h2>WhatsApp</h2>
              </div>
              <p>
                Entre em contato diretamente pelo WhatsApp para um atendimento
                mais rápido
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                Iniciar Conversa
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className={styles.contactCard}
            >
              <div className={styles.cardHeader}>
                <span className={styles.emailIcon}>✉️</span>
                <h2>Email</h2>
              </div>
              <p>Preencha o formulário abaixo e entraremos em contato</p>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nome *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="seu.email@empresa.com.br"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Telefone</label>
                  <input type="tel" id="phone" placeholder="(00) 00000-0000" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensagem *</label>
                  <textarea
                    id="message"
                    placeholder="Descreva sua necessidade de filtragem de ar"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className={styles.submitButton}
                >
                  Enviar Solicitação
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
