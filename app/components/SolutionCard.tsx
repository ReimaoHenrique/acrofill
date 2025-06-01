import React from "react";
import styles from "./SolutionCard.module.css";

interface SolutionCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  variant?: "default" | "dark" | "light";
}

export function SolutionCard({
  icon,
  title,
  children,
  variant = "default",
}: SolutionCardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <h2 className={styles.title}>
        <span className={styles.icon}>{icon}</span>
        {title}
      </h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
