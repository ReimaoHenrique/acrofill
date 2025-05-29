"use client";

import { motion, MotionValue, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./benefits.module.css";
import { useState } from "react";
import benefitsData from "../../../data/benefitsAccordionData.json";

interface BenefitsProps {
  benefitsScale: MotionValue<number>;
  benefitsOpacity: MotionValue<number>;
}

export function Benefits({ benefitsScale, benefitsOpacity }: BenefitsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="beneficios" className={styles.benefits + " section"}>
      <div className="container">
        <motion.div
          style={{
            scale: benefitsScale,
            opacity: benefitsOpacity,
          }}
          className={styles.benefitsContent}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.benefitsTitle}
          >
            Benefícios da Qualidade do Ar
          </motion.h2>

          <div className={styles.accordion}>
            {benefitsData.accordionItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={styles.accordionItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.button
                  className={`${styles.accordionButton} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.title}
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.accordionIcon}
                  >
                    ▼
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.accordionContent}
                    >
                      <div className={styles.accordionContentWrapper}>
                        <div className={styles.accordionText}>
                          <p>{item.content}</p>
                        </div>
                        <div className={styles.accordionImage}>
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
