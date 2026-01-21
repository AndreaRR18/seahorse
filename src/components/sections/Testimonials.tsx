import React, { useEffect, useRef, useState } from 'react';
import SectionContainer from '../ui/SectionContainer';
import TestimonialPopup from '../ui/TestimonialPopup';
import { TESTIMONIALS } from '../../utils/constants';
import { Testimonial } from '../../types';
import styles from '../../styles/components/Testimonials.module.css';

/**
 * Testimonials component - Smooth scrolling carousel of Facebook reviews
 * Shows multiple cards with horizontal scroll and mouse wheel support
 * @returns React component for testimonials section
 */
const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
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

  // Handle opening testimonial popup with aggressive scroll locking
  const openTestimonialPopup = (testimonial: Testimonial) => {
    // Aggressive scroll position locking
    const currentScrollY = window.scrollY;
    console.log('AGGRESSIVE FIX: Storing scroll position:', currentScrollY);
    
    // Lock scroll position using multiple methods
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${currentScrollY}px`;
    document.body.style.width = '100%';
    
    // Store the scroll position in a way that survives re-renders
    const scrollPosition = currentScrollY;
    
    // Update state
    setSelectedTestimonial(testimonial);
    setIsPopupOpen(true);
    
    // Verify and restore scroll position multiple times
    const restoreScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll !== scrollPosition) {
        console.log(`AGGRESSIVE FIX: Detected scroll change from ${scrollPosition} to ${currentScroll}, restoring...`);
        window.scrollTo(0, scrollPosition);
        
        // Try alternative restoration methods
        if (document.scrollingElement) {
          document.scrollingElement.scrollTop = scrollPosition;
        }
        document.documentElement.scrollTop = scrollPosition;
        document.body.scrollTop = scrollPosition;
      }
    };
    
    // Check immediately and multiple times
    restoreScroll();
    setTimeout(restoreScroll, 10);
    setTimeout(restoreScroll, 50);
    setTimeout(restoreScroll, 100);
  };

  // Handle closing testimonial popup with proper cleanup
  const closeTestimonialPopup = () => {
    // Store current "fixed" position before removing styles
    const fixedPosition = document.body.style.top;
    
    setIsPopupOpen(false);
    
    // Restore body styles immediately
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.documentElement.style.scrollBehavior = '';
    
    // If we had a fixed position, restore the scroll position
    if (fixedPosition) {
      const scrollY = parseInt(fixedPosition || '0', 10) * -1;
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
    }
    
    // Small delay to allow animation to complete before clearing testimonial
    setTimeout(() => {
      setSelectedTestimonial(null);
    }, 300);
  };

  return (
    <>
      <SectionContainer id="testimonials" backgroundColor="var(--color-background)">
        <div className={styles.testimonialsContent}>
          <h2 className={styles.title}>La Nostra Esperienza</h2>
          <p className={styles.subtitle}>
            Cosa dicono le famiglie che si affidano a noi
          </p>

          <div className={styles.carouselWrapper}>
            <div
              className={styles.carouselContainer}
              ref={scrollContainerRef}
              onScroll={handleScroll}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={`testimonial-${index}`} className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>"</div>
                  <p className={styles.quote}>{testimonial.quote}</p>
                  <div className={styles.author}>
                    <p className={styles.authorName}>{testimonial.name}</p>
                    <button
                      className={styles.readMoreButton}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                        openTestimonialPopup(testimonial);
                      }}
                      type="button"
                      aria-label={`Leggi tutta la recensione di ${testimonial.name}`}
                    >
                      Leggi di più
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className={styles.consent}>
            * Tutte le testimonianze pubblicate con consenso esplicito dei genitori
          </p>
        </div>
      </SectionContainer>
      
      {/* Testimonial Popup */}
      {selectedTestimonial && (
        <TestimonialPopup
          testimonial={selectedTestimonial}
          onClose={closeTestimonialPopup}
          isOpen={isPopupOpen}
        />
      )}
    </>
  );
};

export default Testimonials;
