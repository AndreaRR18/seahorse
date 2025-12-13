import React from 'react';
import styles from '../../styles/components/Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  href,
  type = 'button',
  className = ''
}) => {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

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
