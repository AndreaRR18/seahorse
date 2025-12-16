import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { CONTACT_INFO, SITE_INFO } from '../../utils/constants';
import styles from '../../styles/components/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>{SITE_INFO.name}</h3>
            <p className={styles.footerTagline}>{SITE_INFO.tagline}</p>
            <p className={styles.footerDescription}>Asilo nido famiglia a Lodi con cura personalizzata per massimo 5 bambini</p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contatti</h4>
            <div className={styles.contactLinks}>
              <a href={`tel:${CONTACT_INFO.phone}`} className={styles.contactLink}>
                <FaPhone /> {CONTACT_INFO.phoneDisplay}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className={styles.contactLink}>
                <FaEnvelope /> {CONTACT_INFO.email}
              </a>
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Dove Siamo</h4>
            <p className={styles.address}>
              <FaMapMarkerAlt /> {CONTACT_INFO.address.street}<br />
              {CONTACT_INFO.address.zip} {CONTACT_INFO.address.city} ({CONTACT_INFO.address.province})
            </p>
          </div>
        </div>

        <div className={styles.copyright}>
          <p className={styles.copyrightTagline}>Un progetto nato con amore</p>
          <p>&copy; {SITE_INFO.year} {SITE_INFO.name}</p>
          <p className={styles.copyrightSlogan}>Dove i piccoli diventano grandi sognatori</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
