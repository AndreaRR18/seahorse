import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Navigation from './Navigation';
import { SITE_INFO } from '../../utils/constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../../styles/components/Header.module.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
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
