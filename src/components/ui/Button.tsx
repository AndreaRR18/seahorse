import React from 'react';
import type { ButtonProps } from '../../types';
import styles from '../../styles/components/Button.module.css';

/**
 * Button component for user interactions
 * @param {React.ReactNode} children - Button content
 * @param {'primary' | 'secondary' | 'outline' | 'hero'} [variant=primary] - Button style variant
 * @param {'small' | 'medium' | 'large'} [size=medium] - Button size
 * @param {function} [onClick] - Click handler for button
 * @param {string} [href] - URL for link button (converts to anchor tag)
 * @param {'button' | 'submit' | 'reset'} [type=button] - Button type
 * @param {string} [className] - Additional CSS classes
 * @returns React component for button or link
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  href,
  type = 'button',
  className = ''
}) => {
  const variantClass = styles[variant] ?? '';
  const sizeClass = styles[size] ?? '';
  const classes = `${styles.button} ${variantClass} ${sizeClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
