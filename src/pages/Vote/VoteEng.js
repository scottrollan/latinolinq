import React, { useState, useEffect } from 'react';
import { fetchPledges } from '../../api/client';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Pledge from './Pledge';
// import AlertMessageSentEng from '../../components/AlertMessageSentEng';
import Footer from '../../components/Footer';
import $ from 'jquery';
import { Form, Button } from 'react-bootstrap';
import voteImage from '../../assets/handsAndLogo.jpg';
import styles from './Vote.module.scss';

const VoteEng = () => {
  return (
    <div className={styles.vote}>
      {/* <AlertMessageSentEng message={status} /> */}
      <NavBar />
      <div className={styles.stripe}>
        <h1>Get Out the Vote!</h1>
      </div>
      <Link to="/VoteEsp" className={styles.translate}>
        <em className={styles.translate}>ver esta página en español</em>
      </Link>
      <div className={styles.column}>
        <div className={styles.titleBold}>Important Date: January 5</div>
        <div className={styles.title}>2 Senate Seats!</div>
        <Button
          className={styles.green}
          href="https://www.mvp.sos.ga.gov/MVP/mvp.do"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Voter Page
        </Button>
        <div
          className={styles.stripe}
          style={{ height: '0.25rem', margin: '1rem 0' }}
        ></div>

        <Pledge language="english" />

        <div
          className={styles.stripe}
          style={{ height: '0.25rem', margin: '1rem 0' }}
        ></div>
        <div className={styles.titleBold}>Know Your Voting Rights</div>
        {/* <div className={styles.title}>2 Senate Seats!</div> */}
        <Button
          className={styles.green}
          href="https://www.aclu.org/know-your-rights/voting-rights"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voting Rights
        </Button>
        <img src={voteImage} alt="" className={styles.image} />
        <Footer />
      </div>
    </div>
  );
};

export default VoteEng;
