import React from 'react';
import type { ButtonProps } from '../../types';
import styles from '../../styles/components/Button.module.css';

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
