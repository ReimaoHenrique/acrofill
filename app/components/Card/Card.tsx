// components/Card.tsx
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./card.module.css";

interface CardProps {
  image: string;
  title: string;
  description?: ReactNode;
  onClick?: () => void;
}

export default function Card({
  image,
  title,
  description = "Clique para mais detalhes",
  onClick,
}: CardProps) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}
