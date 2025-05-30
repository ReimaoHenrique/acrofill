"use client";

import { motion } from "framer-motion";
import styles from "./ContactButtons.module.css";

interface ContactButtonsProps {
  contactOption: "email" | "whatsapp";
  onOptionChange: (option: "email" | "whatsapp") => void;
}

export function ContactButtons({
  contactOption,
  onOptionChange,
}: ContactButtonsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={styles.contactOptions}
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onOptionChange("email")}
        className={`${styles.contactOption} ${
          contactOption === "email" ? styles.contactOptionActive : ""
        }`}
        data-option="email"
      >
        Email
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 4px 12px rgba(0, 215, 87, 0.1)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onOptionChange("whatsapp")}
        className={`${styles.contactOption} ${
          contactOption === "whatsapp" ? styles.contactOptionActive : ""
        }`}
        data-option="whatsapp"
      >
        WhatsApp
      </motion.div>
    </motion.div>
  );
}
