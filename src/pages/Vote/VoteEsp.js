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
        <h1>¡Votemos una vez más!</h1>
      </div>
      <Link to="/Vote" className={styles.translate}>
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
          Verifica Donde Ir a Votar
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
          href="https://drive.google.com/file/d/1P-nFIZHdKmOZ4LjXET9aZ9Ndp7QGV3Dw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Haz Click Aqui para Bajar un Guia
        </Button>
        <img src={voteImage} alt="" className={styles.image} />
        <Footer />
      </div>
    </div>
  );
};

export default VoteEsp;
