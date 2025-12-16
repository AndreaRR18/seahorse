import React from 'react';
import type { CardProps } from '../../types';
import styles from '../../styles/components/Card.module.css';

/**
 * Card component for displaying service information
 * @param {string} [image] - Optional image URL
 * @param {string} [title] - Card title
 * @param {string} [description] - Card description
 * @param {string[]} [highlights] - List of highlight features
 * @param {string} [className] - Additional CSS classes
 * @returns React component for card
 */
const Card: React.FC<CardProps> = ({ image, title, description, highlights, className = '' }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} loading="lazy" />
        </div>
      )}
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
        {highlights && highlights.length > 0 && (
          <ul className={styles.highlights}>
            {highlights.map((highlight, index) => (
              <li key={`highlight-${index}`} className={styles.highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
