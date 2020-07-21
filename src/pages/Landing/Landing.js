import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Logo from '../../assets/Latino LinQ Logo Color White.png';
import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.logoRow}>
        <img src={Logo} alt="" />
      </div>{' '}
      <div className={styles.buttonRow}>
        <Link to="/AboutEsp">
          <Button className={styles.languageButton} variant="secondary">
            español
          </Button>
        </Link>
        <Link to="/AboutEng">
          <Button className={styles.languageButton} variant="secondary">
            english
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
