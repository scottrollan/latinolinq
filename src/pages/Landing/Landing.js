import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Button className={styles.languageButton} variant="secondary">
        español
      </Button>
      <Link to="/AboutEng">
        <Button className={styles.languageButton} variant="secondary">
          english
        </Button>
      </Link>
    </div>
  );
};

export default Landing;
