import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Navigation from './Navigation';
import { SITE_INFO } from '../../utils/constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../../styles/components/Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={styles.logo}
            onClick={closeMobileMenu}
          >
            <h1 className={styles.logoText}>{SITE_INFO.name}</h1>
          </Link>

          <div className={styles.desktopNav}>
            <Navigation isMobile={false} />
          </div>

          <button
            className={styles.hamburger}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <Navigation isMobile={true} closeMenu={closeMobileMenu} />
      )}
    </header>
  );
};

export default Header;
