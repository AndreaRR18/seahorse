import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO } from '../../utils/constants';
import styles from '../../styles/components/FloatingActionButton.module.css';

/**
 * FloatingActionButton component for WhatsApp contact
 * Displays a floating button that links to WhatsApp
 * @returns React component for floating action button
 */
const FloatingActionButton: React.FC = () => {
  const [isVisible] = useState<boolean>(true);

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
