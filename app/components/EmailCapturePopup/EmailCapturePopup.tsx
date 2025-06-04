"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "./ModalContext";
import styles from "./EmailCapturePopup.module.css";

export function EmailCapturePopup() {
  const { isModalOpen, setIsModalOpen } = useModal();

  return (
    <AnimatePresence>
      {isModalOpen && (
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
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <h2>Solicitar Orçamento</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="company">Empresa</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Nome da sua empresa"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Descreva sua necessidade"
                  required
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Enviar
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
