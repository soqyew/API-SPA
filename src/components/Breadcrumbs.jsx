import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Breadcrumbs.module.css'; 

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/">Главная</Link>
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        return (
          <span key={routeTo}>
            <span> / </span>
            <Link to={routeTo}>{pathname}</Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;