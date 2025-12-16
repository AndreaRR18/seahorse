import React from 'react';
import { Element } from 'react-scroll';
import type { SectionContainerProps } from '../../types';
import styles from '../../styles/components/SectionContainer.module.css';

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  backgroundColor,
  children,
  className = ''
}) => {
  const sectionStyle = backgroundColor ? { backgroundColor } : {};

  return (
    <Element name={id} className={styles.wrapper}>
      <section
        id={id}
        className={`${styles.section} ${className}`}
        style={sectionStyle}
      >
        <div className="container">
          {children}
        </div>
      </section>
    </Element>
  );
};

export default SectionContainer;
