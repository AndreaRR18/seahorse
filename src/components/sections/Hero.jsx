import React from 'react';
import { Link } from 'react-scroll';
import Button from '../ui/Button';
import { SITE_INFO } from '../../utils/constants';
import styles from '../../styles/components/Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>
            Benvenuti al {SITE_INFO.name}
          </h1>
          <p className={styles.subheading}>
            {SITE_INFO.tagline}
          </p>
          <Link to="about" smooth={true} duration={500} offset={-80}>
            <Button variant="primary" size="large">
              Scopri di più
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
