import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './Support.module.scss';

const SupportEsp = () => {
  return (
    <div className={styles.support}>
      <NavBar />
      <div className={styles.donationArea}>
        <Link to="/SupportEng" className={styles.translate}>
          <em className={styles.translate}>see this page in English</em>
        </Link>
        <h1>Haz una donación.</h1>
        <a
          className={styles.donate}
          href="https://www.paypal.com/donate/?hosted_button_id=3BCR2WP6GFQV2"
          target="_blank"
          rel="noreferrer noopener"
        >
          Donar
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default SupportEsp;
