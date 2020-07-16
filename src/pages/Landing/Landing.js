import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Button className={styles.languageButton} variant="secondary">
        español
      </Button>
      <Button className={styles.languageButton} variant="secondary">
        english
      </Button>
    </div>
  );
};

export default Landing;
