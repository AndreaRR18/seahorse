import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import { TESTIMONIALS } from '../../utils/constants';
import styles from '../../styles/components/Testimonials.module.css';

const Testimonials: React.FC = () => {
  return (
    <SectionContainer id="testimonials" backgroundColor="var(--color-background)">
      <div className={styles.testimonialsContent}>
        <h2 className={styles.title}>La Nostra Esperienza</h2>
        <p className={styles.subtitle}>
          Cosa dicono le famiglie che si affidano a noi
        </p>

        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={`testimonial-${index}`} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quote}>{testimonial.quote}</p>
              <div className={styles.author}>
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={styles.authorImage}
                    loading="lazy"
                  />
                )}
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{testimonial.name}</p>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.consent}>
          * Tutte le testimonianze e foto pubblicate con consenso esplicito dei genitori
        </p>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
