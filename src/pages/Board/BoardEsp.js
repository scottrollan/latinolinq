import React from 'react';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import bios from '../../data/biosEsp';
import styles from './Board.module.scss';

const BoardEsp = () => {
  const directory = [...bios];
  return (
    <div className={styles.board}>
      <NavBar />
      <Link to="/BoardEng" className={styles.translate}>
        <em className={styles.translate}>see this page in English</em>
      </Link>
      <h1>Junta Directiva</h1>
      <div className={styles.directory}>
        {directory.map((p, index) => {
          return (
            <div
              className={styles.person}
              key={p.name}
              style={{
                backgroundColor: index % 2 === 0 ? 'var(--lightest-gray)' : '',
              }}
            >
              <h3
                style={{
                  alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end',
                }}
              >
                {p.name}, {p.title}
              </h3>
              <div
                className={styles.imageBio}
                style={{
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                }}
              >
                <div className={styles.imageWrapper}>
                  <img src={p.image} alt="" />
                </div>
                <div className={styles.bio}>
                  {p.bio.map((paragraph) => (
                    <p key={paragraph.paragraph.substr(0, 25)}>
                      {paragraph.paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default BoardEsp;
