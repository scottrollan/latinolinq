import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { recursos } from '../../data/legalResources';
import styles from './LegalAssistance.module.scss';

export default function LegalAssistanceEsp() {
  return (
    <div className={styles.legalAssistance}>
      <NavBar />
      <Link to="/LegalAssistanceEng" className={styles.translate}>
        <em className={styles.translate}>see this page in English</em>
      </Link>
      <h1>Recursos de Proveedores Legales</h1>
      <div className={styles.chunkArea}>
        {recursos.map((r, i) => {
          const keyText = r.org.split(' ').join('').toLowerCase();
          const length = recursos.length;
          return (
            <div
              className={[
                `${styles.chunk} ${i + 1 === length ? styles.lastChunk : null}`,
              ]}
              key={keyText}
            >
              <h3>{r.org}</h3>
              <h5>{r.phone}</h5>
              {r.address}
              <div className={styles.twoButtons}>
                <a
                  className={styles.actionButton}
                  href={r.web}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ display: r.web ? 'inherit' : 'none' }}
                >
                  {`El sitio web de ${r.org}`}
                </a>
                <a
                  className={styles.actionButton}
                  href={r.web2}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ display: r.web2 ? 'inherit' : 'none' }}
                >
                  {r.web2}
                </a>
              </div>
              {r.text}
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
