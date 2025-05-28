"use client";

import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import styles from "./benefits.module.css";

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
          <div className={styles.benefitsText}>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Por que investir em qualidade do ar?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A qualidade do ar em ambientes industriais impacta diretamente na
              saúde dos colaboradores e na eficiência dos processos produtivos.
              Ambientes com ar purificado reduzem o absenteísmo por problemas
              respiratórios e aumentam significativamente o bem-estar e a
              produtividade da equipe.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Além disso, nossas soluções ajudam sua empresa a atender às
              exigências das normas regulamentadoras, evitando multas e
              processos trabalhistas relacionados à insalubridade. Investir em
              qualidade do ar não é apenas uma questão de conformidade legal,
              mas um diferencial competitivo que valoriza o capital humano da
              sua organização.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.benefitsImage}
          >
            <motion.div
              animate={{
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={styles.benefitsImageContainer}
            >
              <Image
                src="/images/air-quality-1.jpg"
                alt="Benefícios da qualidade do ar em ambiente industrial"
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
