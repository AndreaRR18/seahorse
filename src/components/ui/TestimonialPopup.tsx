import React, { useEffect, useRef } from 'react';
import { Testimonial } from '../../types';
import styles from '../../styles/components/TestimonialPopup.module.css';

interface TestimonialPopupProps {
  testimonial: Testimonial;
  onClose: () => void;
  isOpen: boolean;
}

const TestimonialPopup: React.FC<TestimonialPopupProps> = ({ 
  testimonial, 
  onClose, 
  isOpen 
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Add class to body to prevent scrolling
      document.body.classList.add('no-scroll');
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen, onClose]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay} role="dialog" aria-modal="true" aria-labelledby="testimonial-title">
      <div className={styles.popupContent} ref={popupRef}>
        <button 
          className={styles.closeButton} 
          onClick={onClose} 
          aria-label="Chiudi testimonianze"
        >
          ×
        </button>

        <div className={styles.popupHeader}>
          <h3 id="testimonial-title" className={styles.authorName}>{testimonial.name}</h3>
        </div>

        <div className={styles.popupBody}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.fullQuote}>{testimonial.quote}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPopup;