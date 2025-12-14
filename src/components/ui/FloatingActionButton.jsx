import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO } from '../../utils/constants';
import styles from '../../styles/components/FloatingActionButton.module.css';

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={CONTACT_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.fab} ${isVisible ? styles.visible : ''}`}
      aria-label="Contattaci su WhatsApp"
    >
      <FaWhatsapp />
      <span className={styles.tooltip}>Scrivici!</span>
    </a>
  );
};

export default FloatingActionButton;
