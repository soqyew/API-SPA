import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import styles from './styles/App.module.css';

const App = () => (
  <div className={styles.app}>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

export default App;