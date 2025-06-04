"use client";

import { motion } from "framer-motion";
import styles from "./Header.module.css";

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.logo}
    >
      <h1>AirTech</h1>
    </motion.div>
  );
}
