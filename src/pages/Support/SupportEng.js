import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './Support.module.scss';

const SupportEng = () => {
  return (
    <div className={styles.support}>
      <NavBar />
      <div className={styles.donationArea}>
        <Link to="/SupportEsp" className={styles.translate}>
          <em className={styles.translate}>ver esta página en español</em>
        </Link>
        <h1>Make a Donation</h1>
        <a
          className={styles.donate}
          href="https://secure.everyaction.com/JLZYxY_D9kqnTm7ezSa0bA2"
          target="_blank"
          rel="noreferrer noopener"
        >
          Donate
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default SupportEng;
