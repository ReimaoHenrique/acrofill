import { motion, AnimatePresence } from "framer-motion";
import styles from "./NotificationPopup.module.css";

interface NotificationPopupProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

export const NotificationPopup = ({
  message,
  type,
  isVisible,
  onClose,
}: NotificationPopupProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`${styles.popup} ${styles[type]}`}
        >
          <div className={styles.content}>
            <span className={styles.icon}>
              {type === "success" ? "✓" : "!"}
            </span>
            <p>{message}</p>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
