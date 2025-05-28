import styles from "./NeonButton.module.css";

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function NeonButton({ children, onClick }: NeonButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
      <div className={styles.hoverEffect}>
        <div></div>
      </div>
    </button>
  );
}
