import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import { FaClock } from 'react-icons/fa';
import { SCHEDULE } from '../../utils/constants';
import styles from '../../styles/components/Schedule.module.css';

/**
 * Schedule component - Displays daycare operating hours and availability
 * Shows days, hours, and flexible scheduling information
 * @returns React component for schedule section
 */
const Schedule: React.FC = () => {
  return (
    <SectionContainer id="schedule" backgroundColor="var(--color-background)">
      <div className={styles.scheduleContent}>
        <h2 className={styles.title}>Orari Pensati per le Famiglie Moderne</h2>
        <p className={styles.subtitle}>
          Orari flessibili per venire incontro alle esigenze di mamma e papà. Contattaci per personalizzare
          gli orari in base alle tue necessità lavorative e familiari.
        </p>

        <div className={styles.scheduleCard}>
          <div className={styles.iconWrapper}>
            <FaClock />
          </div>
          <div className={styles.scheduleDetails}>
            <div className={styles.scheduleItem}>
              <h3 className={styles.label}>Giorni</h3>
              <p className={styles.value}>{SCHEDULE.days}</p>
            </div>
            <div className={styles.scheduleItem}>
              <h3 className={styles.label}>Orario</h3>
              <p className={styles.value}>{SCHEDULE.hours}</p>
            </div>
          </div>
          <p className={styles.note}>{SCHEDULE.note}</p>
          <p className={styles.closures}>{SCHEDULE.closures}</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Schedule;
