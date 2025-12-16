import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import Card from '../ui/Card';
import { SERVICES } from '../../utils/constants';
import styles from '../../styles/components/Services.module.css';

/**
 * Services component - Displays the daycare services offered
 * Shows three service cards with descriptions and highlights
 * @returns React component for services section
 */
const Services: React.FC = () => {
  return (
    <SectionContainer id="services" backgroundColor="var(--color-white)">
      <div className={styles.servicesContent}>
        <h2 className={styles.title}>I Nostri Servizi</h2>
        <p className={styles.subtitle}>
          Offriamo un'ampia gamma di servizi per soddisfare le esigenze della vostra famiglia
        </p>

        <div className={styles.servicesGrid}>
          {SERVICES.map((service, index) => (
            <Card
              key={`service-${index}`}
              image={service.image}
              title={service.title}
              description={service.description}
              highlights={service.highlights}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Services;
