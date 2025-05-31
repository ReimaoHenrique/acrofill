"use client";

import { motion } from "framer-motion";
import styles from "./SolutionCard.module.css";

interface SolutionCardProps {
  title: string;
  description: string;
  hasIcon?: boolean;
  iconDelay?: number;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  icon?: React.ReactNode;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export function SolutionCard({
  title,
  description,
  hasIcon = false,
  iconDelay = 0,
  buttonText,
  buttonLink,
  onButtonClick,
  icon,
}: SolutionCardProps) {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (buttonLink) {
      window.location.href = buttonLink;
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className={styles.solutionCard}
    >
      {hasIcon && (
        <div className={styles.cardIcon}>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: iconDelay,
            }}
            className={styles.iconPlaceholder}
          >
            {icon}
          </motion.div>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      {buttonText && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.cardButton}
          onClick={handleButtonClick}
        >
          {buttonText}
        </motion.button>
      )}
    </motion.div>
  );
}
