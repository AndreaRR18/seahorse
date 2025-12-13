import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import { FaHeart, FaClock, FaStar, FaHome } from 'react-icons/fa';
import { VALUES } from '../../utils/constants';
import styles from '../../styles/components/About.module.css';

const iconMap = {
  0: <FaHeart />,
  1: <FaClock />,
  2: <FaStar />,
  3: <FaHome />
};

const About = () => {
  return (
    <SectionContainer id="about" backgroundColor="var(--color-background)">
      <div className={styles.aboutContent}>
        <h2 className={styles.title}>Chi Siamo</h2>

        <p className={styles.intro}>
          Il Cavalluccio Marino di Serena è un asilo nido familiare situato nel cuore di Lodi,
          dove ogni bambino viene accolto con amore e attenzione personalizzata. Con anni di
          esperienza nell'educazione infantile, offriamo un ambiente sicuro, stimolante e
          accogliente dove i vostri piccoli possono crescere e imparare.
        </p>

        <div className={styles.valuesGrid}>
          {VALUES.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.iconWrapper}>
                {iconMap[index]}
              </div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.serenaSection}>
          <div className={styles.serenaImage}>
            <img
              src="https://placehold.co/400x400/FFB6C1/333?text=Tata+Serena"
              alt="Tata Serena"
            />
          </div>
          <div className={styles.serenaText}>
            <h3 className={styles.serenaTitle}>Ciao, sono Serena!</h3>
            <p>
              Da oltre 10 anni mi dedico con passione all'educazione dei bambini. Per me ogni
              bambino è unico e merita attenzione personalizzata. Ho creato il Cavalluccio Marino
              per offrire alle famiglie di Lodi un servizio flessibile, professionale e soprattutto...
              pieno d'amore!
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
