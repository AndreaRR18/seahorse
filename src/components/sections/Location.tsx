import React, { useState } from 'react';
import SectionContainer from '../ui/SectionContainer';
import Button from '../ui/Button';
import { CONTACT_INFO } from '../../utils/constants';
import styles from '../../styles/components/Location.module.css';

/**
 * Location component - Displays daycare address and map
 * Shows physical address and a Google Maps embed loaded only after consent
 * @returns React component for location section
 */
const Location: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

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
          {mapLoaded ? (
            <iframe
              title="Cavalluccio Marino Location"
              src={mapSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className={styles.mapPlaceholder}>
              <p className={styles.mapPlaceholderText}>
                La mappa è fornita da Google. Caricandola, Google potrà installare cookie
                e ricevere il tuo indirizzo IP.
              </p>
              <Button variant="primary" onClick={() => setMapLoaded(true)}>
                Carica la mappa
              </Button>
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Location;
