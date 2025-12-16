import React from 'react';
import { Link } from 'react-scroll';
import Button from '../ui/Button';
import { SITE_INFO } from '../../utils/constants';
import styles from '../../styles/components/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>
            Asilo Nido Famiglia a Lodi - Solo 5 Bambini
          </h1>
          <p className={styles.subheading}>
            {SITE_INFO.tagline}
          </p>
          <div className={styles.heroDescription}>
            <p>Cura personalizzata, attività educative e orari flessibili per le famiglie di Lodi e dintorni.</p>
          </div>
          <Link to="about" smooth={true} duration={500} offset={-80}>
            <Button variant="hero" size="large">
              Scopri il Nostro Nido
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
