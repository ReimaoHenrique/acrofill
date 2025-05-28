"use client";

import { motion, AnimatePresence } from "framer-motion";
import styles from "../../page.module.css";

interface OrcamentoModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export function OrcamentoModal({
  isModalOpen,
  setIsModalOpen,
}: OrcamentoModalProps) {
  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.modalOverlay}
        onClick={() => setIsModalOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles.modalClose}
            onClick={() => setIsModalOpen(false)}
          >
            ×
          </button>
          <h2>Solicitar Orçamento</h2>
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
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                placeholder="Descreva sua necessidade de filtragem de ar"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button"
            >
              Enviar Solicitação
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
