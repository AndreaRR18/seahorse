import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import { CONTACT_INFO } from '../../utils/constants';
import styles from '../../styles/components/Location.module.css';

const Location: React.FC = () => {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.city}, Italy`
  )}&output=embed`;

  return (
    <SectionContainer id="location" backgroundColor="var(--color-background)">
      <div className={styles.locationContent}>
        <h2 className={styles.title}>Dove Siamo</h2>
        <p className={styles.subtitle}>
          Il nostro asilo nido famiglia si trova a San Bernardo, Lodi, in una zona tranquilla e facilmente raggiungibile.
          Siamo vicini al centro città e ben collegati con i mezzi pubblici.
        </p>
        <p className={styles.address}>
          {CONTACT_INFO.address.street}<br />
          {CONTACT_INFO.address.zip} {CONTACT_INFO.address.city} ({CONTACT_INFO.address.province}), {CONTACT_INFO.address.country}
        </p>

        <div className={styles.mapContainer}>
          <iframe
            title="Cavalluccio Marino Location"
            src={mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Location;
