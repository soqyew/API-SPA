import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NotFound.module.css'; 
const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404<br></br>
        Page not found
      </h1>
      <Link to="/albums">Come back to Albums</Link>
    </div>
  );
};

export default NotFound;