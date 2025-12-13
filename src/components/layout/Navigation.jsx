import React from 'react';
import { Link } from 'react-scroll';
import { NAV_ITEMS } from '../../utils/constants';
import styles from '../../styles/components/Navigation.module.css';

const Navigation = ({ isMobile, closeMenu }) => {
  return (
    <nav className={isMobile ? styles.mobileNav : styles.desktopNav}>
      <ul className={styles.navList}>
        {NAV_ITEMS.map(item => (
          <li key={item.id} className={styles.navItem}>
            <Link
              to={item.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass={styles.active}
              className={styles.navLink}
              onClick={() => isMobile && closeMenu && closeMenu()}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
