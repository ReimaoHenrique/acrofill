import { useState } from "react";
import styles from "./MemberCard.module.css";
import Image from "next/image";

interface SimpleMemberCardProps {
  name: string;
  role: string;
  image?: string;
  description?: string;
}

export function SimpleMemberCard({
  name,
  role,
  image,
  description,
}: SimpleMemberCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        {image && !imageError ? (
          <Image
            src={image}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          <div className={styles.card__imagePlaceholder}>
            {name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>
        )}
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__defaultState}>
          <div className={styles.card__titleWrapper}>
            <p className={styles.card__title}>{name}</p>
            <p className={styles.card__text}>{role}</p>
          </div>
          {description && (
            <p className={styles.card__clickText}>Clique para saber mais</p>
          )}
        </div>
        {description && (
          <div className={styles.card__interactiveState}>
            <div className={styles.card__titleWrapper}>
              <p className={styles.card__title}>{name}</p>
              <p className={styles.card__text}>{role}</p>
            </div>
            <div className={styles.card__divider} />
            <div className={styles.card__description}>
              <p>{description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
