import React from 'react';
import { Element } from 'react-scroll';
import type { SectionContainerProps } from '../../types';
import styles from '../../styles/components/SectionContainer.module.css';

/**
 * SectionContainer component for page sections with scroll-to functionality
 * @param {string} id - Section ID for scrolling and anchor links
 * @param {string} [backgroundColor] - Optional background color
 * @param {React.ReactNode} children - Section content
 * @param {string} [className] - Additional CSS classes
 * @returns React component for section container
 */
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
