"use client";

import { motion, MotionValue } from "framer-motion";
import styles from "./benefits.module.css";
import { Accordion } from "../../../components/Accordion/Accordion";
import accordionData from "../../../data/accordionData.json";

interface BenefitsProps {
  benefitsScale: MotionValue<number>;
  benefitsOpacity: MotionValue<number>;
}

export function Benefits({ benefitsScale, benefitsOpacity }: BenefitsProps) {
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
          <Accordion
            items={accordionData.benefits.items}
            title={accordionData.benefits.title}
            className={styles.benefitsAccordion}
          />
        </motion.div>
      </div>
    </section>
  );
}
