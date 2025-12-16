import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import { FaHeart, FaClock, FaStar, FaHome } from 'react-icons/fa';
import { VALUES } from '../../utils/constants';
import styles from '../../styles/components/About.module.css';

const iconMap: Record<number, React.ReactElement> = {
  0: <FaHeart />,
  1: <FaClock />,
  2: <FaStar />,
  3: <FaHome />
};

const About: React.FC = () => {
  return (
    <SectionContainer id="about" backgroundColor="var(--color-background)">
      <div className={styles.aboutContent}>
        <h2 className={styles.title}>Chi Siamo</h2>

        <p className={styles.intro}>
          Il Cavalluccio Marino è un asilo nido famiglia situato a San Bernardo, Lodi,
          dove ogni bambino è accolto come in famiglia.
          Un nido piccolo, dove il tuo bambino è grande.
        </p>

        <div className={styles.valuesGrid}>
          {VALUES.map((value, index) => (
            <div key={`value-${index}`} className={styles.valueCard}>
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
              src="/assets/tata-serena.jpg"
              alt="Tata Serena"
            />
          </div>
          <div className={styles.serenaText}>
            <h3 className={styles.serenaTitle}>Ciao, sono Tata Serena!</h3>
            <p>
              Con oltre 15 anni di esperienza nell'accudimento dei bambini,
              ho creato questo nido famiglia per offrire un ambiente intimo,
              dove i piccoli possono crescere con affetto e attenzioni personalizzate.
            </p>
            <p>
              <strong>Solo 5 bambini alla volta</strong>, perché ognuno merita il meglio.
              Qui non siete un numero, ma parte della nostra famiglia.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
