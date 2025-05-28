"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import Marquee from "react-fast-marquee";
import styles from "./testimonials.module.css";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Silva",
    company: "Indústria Têxtil Progresso",
    image: "/images/user-circle.svg",
    text: "A implementação dos filtros da AirTech transformou completamente o ambiente de trabalho em nossa fábrica. A redução de partículas no ar é notável e nossos funcionários relatam menos problemas respiratórios.",
  },
  {
    id: 2,
    name: "Mariana Costa",
    company: "Metalúrgica Avançada",
    image: "/images/user-circle.svg",
    text: "Investir nos sistemas de filtragem da AirTech foi uma das melhores decisões que tomamos. Além de atender às normas regulamentadoras, percebemos um aumento significativo na produtividade da equipe.",
  },
  {
    id: 3,
    name: "Roberto Mendes",
    company: "Química Industrial BR",
    image: "/images/user-circle.svg",
    text: "A consultoria em insalubridade da AirTech nos ajudou a identificar pontos críticos que nem imaginávamos. As soluções implementadas reduziram drasticamente os níveis de poluentes no ar.",
  },
  {
    id: 4,
    name: "Fernanda Almeida",
    company: "Alimentos Naturais SA",
    image: "/images/user-circle.svg",
    text: "Os filtros industriais da AirTech superaram nossas expectativas. A qualidade do ar melhorou tanto que até nossos processos de produção de alimentos foram beneficiados, com menos contaminação.",
  },
  {
    id: 5,
    name: "Paulo Rodrigues",
    company: "Farmacêutica Saúde",
    image: "/images/user-circle.svg",
    text: "O sistema de monitoramento em tempo real nos dá tranquilidade para garantir a qualidade do ar em nossa indústria farmacêutica. O suporte técnico da AirTech é excepcional.",
  },
];

export function Testimonials() {
  const memoizedTestimonials = useMemo(() => testimonials, []);

  const TestimonialsMarquee = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById("depoimentos");
      if (element) {
        observer.observe(element);
      }

      return () => observer.disconnect();
    }, []);

    if (!isVisible) {
      return <div style={{ height: "300px" }} />;
    }

    return (
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        direction="left"
        style={{ width: "100%" }}
      >
        {memoizedTestimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            whileHover={{ y: -10 }}
            className={styles.testimonialCard}
            style={{ width: "350px", flexShrink: 0 }}
          >
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialImage}>
                <Image
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.testimonialAuthor}>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.company}</p>
              </div>
            </div>
            <p className={styles.testimonialContent}>{testimonial.text}</p>
          </motion.div>
        ))}
      </Marquee>
    );
  };

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
