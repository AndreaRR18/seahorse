import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO } from '../../utils/constants';
import styles from '../../styles/components/FloatingActionButton.module.css';

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
