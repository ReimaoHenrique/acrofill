"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ImageCarousel.module.css";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoPlayInterval?: number;
  prevButtonContent?: ReactNode;
  nextButtonContent?: ReactNode;
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
  prevButtonContent = "‹", // Default content
  nextButtonContent = "›", // Default content
}: ImageCarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = page % images.length;

  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, images.length]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setIsAutoPlaying(false);
  };

  const handlePrevious = () => {
    paginate(-1);
  };

  const handleNext = () => {
    paginate(1);
  };

  return (
    <div className={styles.carouselContainer} ref={carouselRef}>
      <div className={styles.carouselWrapper}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex].src}
            alt={images[imageIndex].alt}
            className={styles.carouselImage}
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
          />
        </AnimatePresence>

        {/* Remove the previous and next buttons */}
        {/*
        <button
          className={`${styles.carouselButton} ${styles.prevButton}`}
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          aria-label="Imagem anterior"
        >
          {prevButtonContent}
        </button>
        <button
          className={`${styles.carouselButton} ${styles.nextButton}`}
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Próxima imagem"
        >
          {nextButtonContent}
        </button>
        */}

        {/* Indicators (optional, can keep or remove) */}
        {/*
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                imageIndex === index ? styles.active : ""
              }`}
              onClick={() => {
                const newDirection = index > imageIndex ? 1 : -1;
                setPage([index, newDirection]);
                setIsAutoPlaying(false);
              }}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
        */}
      </div>

      {/* Thumbnail Gallery */}
      <div className={styles.thumbnailGallery}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`${styles.thumbnail} ${
              imageIndex === index ? styles.activeThumbnail : ""
            }`}
            onClick={() => {
              const newDirection = index > imageIndex ? 1 : -1;
              setPage([index, newDirection]);
              setIsAutoPlaying(false);
            }}
          />
        ))}
      </div>
    </div>
  );
}
