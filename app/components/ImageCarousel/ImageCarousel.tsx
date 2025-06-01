"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./ImageCarousel.module.css";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoPlayInterval?: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function ImageCarousel({
  images,
  autoPlayInterval = 5000,
}: ImageCarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = page % images.length;

  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
      setIsAutoPlaying(false);
    },
    [page]
  );

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, paginate]);

  return (
    <div className={styles.carouselContainer} ref={carouselRef}>
      <div className={styles.carouselWrapper}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={carouselRef}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className={styles.carouselImageContainer}
          >
            <Image
              src={images[imageIndex].src}
              alt={images[imageIndex].alt}
              className={styles.carouselImage}
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.thumbnailGallery}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.thumbnailContainer} ${
              imageIndex === index ? styles.activeThumbnail : ""
            }`}
            onClick={() => {
              const newDirection = index > imageIndex ? 1 : -1;
              setPage([index, newDirection]);
              setIsAutoPlaying(false);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className={styles.thumbnail}
              width={80}
              height={60}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
