import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => (
  <nav className={styles.nav}>
    <NavLink 
      to="/users" 
      className={({ isActive }) => (isActive ? styles.active : undefined)}
    >
      Users
    </NavLink>
    <NavLink 
      to="/albums" 
      className={({ isActive }) => (isActive ? styles.active : undefined)}
    >
      Albums
    </NavLink>
  </nav>
);

export default Header;