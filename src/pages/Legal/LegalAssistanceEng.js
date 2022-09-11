import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { resources } from '../../data/legalResources';
import styles from './LegalAssistance.module.scss';

export default function LegalAssistanceEng() {
  return (
    <div className={styles.legalAssistance}>
      <NavBar />
      <Link to="/LegalAssistanceEsp" className={styles.translate}>
        <em className={styles.translate}>ver esta página en español</em>
      </Link>
      <h1>Legal Assistance Resources</h1>
      <div className={styles.chunkArea}>
        {resources.map((r, i) => {
          const keyText = r.org.split(' ').join('').toLowerCase();
          const length = resources.length;
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
                  {`${r.org}'s website`}
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
