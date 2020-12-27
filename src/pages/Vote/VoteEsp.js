import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Pledge from './Pledge';
import Footer from '../../components/Footer';
import { Button } from 'react-bootstrap';
import voteImage from '../../assets/handsAndLogo.jpg';
import styles from './Vote.module.scss';

const VoteEsp = () => {
  return (
    <div className={styles.vote}>
      <NavBar />
      <div className={styles.stripe}>
        <h1>¡que vayan a votar!</h1>
      </div>
      <Link to="/VoteEng" className={styles.translate}>
        <em className={styles.translate}>see this page in English</em>
      </Link>

      <div className={styles.column}>
        <div className={styles.titleBold}>Fecha importante: 5 de enero</div>
        <div className={styles.title}>¡2 asientos del Senado!</div>
        <Button
          className={styles.green}
          href="https://www.mvp.sos.ga.gov/MVP/mvp.do"
          target="_blank"
          rel="noopener noreferrer"
        >
          verifique donde ir a votar
        </Button>
        <div
          className={styles.stripe}
          style={{ height: '0.25rem', margin: '1rem 0' }}
        ></div>

        <Pledge language="spanish" />
        <div
          className={styles.stripe}
          style={{ height: '0.25rem', margin: '1rem 0' }}
        ></div>
        <div className={styles.titleBold}>Conozca sus derechos de voto.</div>
        <Button
          className={styles.green}
          href="https://www.aclu.org/know-your-rights/derecho-al-voto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          mis derechos
        </Button>
        <img src={voteImage} alt="" className={styles.image} />
        <Footer />
      </div>
    </div>
  );
};

export default VoteEsp;
