import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import Button from '../ui/Button';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO } from '../../utils/constants';
import styles from '../../styles/components/Contact.module.css';

const Contact = () => {
  return (
    <SectionContainer id="contact" backgroundColor="var(--color-white)">
      <div className={styles.contactContent}>
        <h2 className={styles.title}>Contattaci</h2>
        <p className={styles.subtitle}>
          Siamo qui per rispondere a tutte le tue domande
        </p>

        <div className={styles.contactGrid}>
          <a href={`tel:${CONTACT_INFO.phone}`} className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <FaPhone />
            </div>
            <h3 className={styles.contactTitle}>Telefono</h3>
            <p className={styles.contactValue}>{CONTACT_INFO.phoneDisplay}</p>
          </a>

          <a href={`mailto:${CONTACT_INFO.email}`} className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <FaEnvelope />
            </div>
            <h3 className={styles.contactTitle}>Email</h3>
            <p className={styles.contactValue}>{CONTACT_INFO.email}</p>
          </a>

          <a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <div className={styles.iconWrapper}>
              <FaWhatsapp />
            </div>
            <h3 className={styles.contactTitle}>WhatsApp</h3>
            <p className={styles.contactValue}>Scrivici ora!</p>
          </a>
        </div>

        <div className={styles.ctaSection}>
          <Button
            variant="primary"
            size="large"
            href={CONTACT_INFO.whatsapp}
          >
            Contattaci su WhatsApp
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
