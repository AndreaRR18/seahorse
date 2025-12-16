import React from 'react';
import { Link } from 'react-scroll';
import Button from '../ui/Button';
import { SITE_INFO } from '../../utils/constants';
import styles from '../../styles/components/Hero.module.css';

/**
 * Hero component - Main landing section with call-to-action
 * Displays the main heading, subheading, and primary CTA button
 * @returns React component for hero section
 */
const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>
            Asilo Nido Cavalluccio Marino
          </h1>
          <p className={styles.subheading}>
            {SITE_INFO.tagline}
          </p>
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
