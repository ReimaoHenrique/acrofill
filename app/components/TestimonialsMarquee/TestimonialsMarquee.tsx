"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import testimonialsData from "@/app/data/testimonials.json";
import styles from "./TestimonialsMarquee.module.css";

export function TestimonialsMarquee() {
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
      {testimonialsData.testimonials.map((testimonial) => (
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
}
