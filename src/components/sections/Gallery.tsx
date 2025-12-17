import React, { useEffect, useRef, useState } from 'react';
import SectionContainer from '../ui/SectionContainer';
import { GALLERY_IMAGES } from '../../utils/constants';
import styles from '../../styles/components/Gallery.module.css';

/**
 * Gallery component - Smooth scrolling carousel of daycare photos
 * Shows multiple images with horizontal scroll and mouse wheel support
 * @returns React component for gallery section
 */
const Gallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;

    autoScrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = container.offsetWidth * 0.3; // Scroll 30% of container width

        // Check if we're at the end
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
          // Reset to beginning
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll forward
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4000); // Auto-scroll every 4 seconds

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);

  // Handle user interaction
  const handleUserInteraction = () => {
    setIsAutoScrolling(false);

    // Clear existing timeout
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }

    // Resume auto-scroll after 8 seconds of inactivity
    userInteractionTimeoutRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 8000);
  };

  // Handle mouse wheel scroll on desktop - follow horizontal scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Only handle horizontal scroll (e.deltaX)
      if (e.deltaX !== 0) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaX,
          behavior: 'smooth',
        });
        handleUserInteraction();
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Handle manual scroll
  const handleScroll = () => {
    handleUserInteraction();
  };

  return (
    <SectionContainer id="gallery" backgroundColor="var(--color-background-light)">
      <div className={styles.galleryContent}>
        <h2 className={styles.title}>La Nostra Galleria</h2>
        <p className={styles.subtitle}>
          Momenti speciali della vita al nido
        </p>

        <div className={styles.carouselWrapper}>
          <div
            className={styles.carouselContainer}
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {GALLERY_IMAGES.map((image, index) => (
              <div key={`gallery-${index}`} className={styles.imageCard}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Gallery;
