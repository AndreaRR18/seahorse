import React from "react";
import SectionContainer from "../ui/SectionContainer";
import { FaHeart, FaClock, FaStar, FaHome } from "react-icons/fa";
import { VALUES } from "../../utils/constants";
import styles from "../../styles/components/About.module.css";

const iconMap: Record<number, React.ReactElement> = {
  0: <FaHeart />,
  1: <FaClock />,
  2: <FaStar />,
  3: <FaHome />,
};

/**
 * About component - Information about the daycare and its values
 * Displays introduction, values, and information about Tata Serena
 * @returns React component for about section
 */
const About: React.FC = () => {
  return (
    <SectionContainer id="about" backgroundColor="var(--color-background)">
      <div className={styles.aboutContent}>
        <h2 className={styles.title}>Chi Siamo</h2>

        <p className={styles.intro}>
          Il Cavalluccio Marino è un asilo nido famiglia situato a San Bernardo,
          Lodi, dove ogni bambino è accolto come in famiglia. Con un massimo di
          5 bambini alla volta, offriamo un ambiente intimo e sicuro, dove ogni
          piccolo riceve attenzione personalizzata e cresce con amore e cura.
          Siamo specializzati nell'accudimento di bambini da 0 a 3 anni, con
          attività educative, gioco libero e inserimento graduale per garantire
          un'esperienza serena e positiva per i piccoli e le loro famiglie.
        </p>

        <div className={styles.valuesGrid}>
          {VALUES.map((value, index) => (
            <div key={`value-${index}`} className={styles.valueCard}>
              <div className={styles.iconWrapper}>{iconMap[index]}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.serenaSection}>
          <div className={styles.serenaImage}>
            <img
              src="assets/tata_baby_cap.jpeg"
              alt="Tata Serena, educatrice con oltre 15 anni di esperienza nell'accudimento dei bambini"
              loading="lazy"
            />
          </div>
          <div className={styles.serenaText}>
            <h3 className={styles.serenaTitle}>Ciao, sono Tata Serena!</h3>
            <p>
              Nel <strong>2012</strong> ho dato vita a questo nido famiglia per
              offrire un ambiente caldo e accogliente, dove ogni piccolo possa
              crescere con amore, sicurezza e attenzioni personalizzate.
              <p>
                <strong>Sono anche mamma orgogliosa di Marco</strong>, e credo
                profondamente nel valore di un’educazione fatta di ascolto,
                rispetto e cura quotidiana.
              </p>
            </p>
            <p>
              <strong>Solo 5 bambini alla volta</strong>, perché ognuno merita
              il meglio. Qui non siete un numero, ma parte della nostra
              famiglia.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
