import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Pledge from './Pledge';
import Footer from '../../components/Footer';
import { Button } from 'react-bootstrap';
import voteImage from '../../assets/handsAndLogo.jpg';
import styles from './Vote.module.scss';

const VoteEng = () => {
  return (
    <div className={styles.vote}>
      <NavBar />
      <div className={styles.stripe}>
        <h1>Let's vote one more time!</h1>
      </div>
      <Link to="/Vota" className={styles.translate}>
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
          Find Your Voting Location
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
          href="https://drive.google.com/file/d/1lv4K2NfY4ZP7_LdG-ge96O7CfuZo-PbW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here for a Downloadable Guide
        </Button>
        <img src={voteImage} alt="" className={styles.image} />
        <Footer />
      </div>
    </div>
  );
};

export default VoteEng;
