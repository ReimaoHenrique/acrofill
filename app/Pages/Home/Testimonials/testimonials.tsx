"use client";

import { motion } from "framer-motion";
import { TestimonialsMarquee } from "@/app/components/TestimonialsMarquee/TestimonialsMarquee";
import styles from "./testimonials.module.css";

export function Testimonials() {
  return (
    <section id="depoimentos" className={styles.testimonials + " section"}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.sectionTitle}
        >
          O que nossos clientes dizem
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TestimonialsMarquee />
        </motion.div>
      </div>
    </section>
  );
}
