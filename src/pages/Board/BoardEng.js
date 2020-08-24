import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Client, fetchBoard } from '../../api/client';
import imageUrlBuilder from '@sanity/image-url';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './Board.module.scss';

const builder = imageUrlBuilder(Client);

const urlFor = (source) => {
  return builder.image(source);
};

const BoardEng = () => {
  const [board, setBoard] = useState([]);

  const fetchBoardMembers = async () => {
    let boardMembers = [];
    const member = await fetchBoard;

    member.forEach((m) => {
      const imageObj = m.memberImage;
      const src = urlFor(imageObj).url().toString();
      let currentMember = {
        name: m.name,
        titleEng: m.titleEng,
        bioEng: m.bioEng,
        src: src,
      };
      boardMembers.push(currentMember);
    });
    setBoard(boardMembers);
  };

  useEffect(() => {
    fetchBoardMembers();
  }, []);

  return (
    <div className={styles.board}>
      <NavBar />
      <Link to="/BoardEsp" className={styles.translate}>
        <em className={styles.translate}>ver esta página en español</em>
      </Link>
      <h1>Board of Directors</h1>
      <div className={styles.directory}>
        {board.map((p, index) => {
          return (
            <div
              className={styles.person}
              key={p.name}
              style={{
                backgroundColor: index % 2 === 0 ? 'var(--lightest-gray)' : '',
              }}
            >
              <h3>
                {p.name}, {p.titleEng}
              </h3>
              <div
                className={styles.imageBio}
                style={{
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                }}
              >
                <div
                  className={styles.imageWrapper}
                  style={{ backgroundImage: `url(${p.src})` }}
                >
                  {/* <img src={p.src} alt="" /> */}
                </div>

                <div className={styles.bio}>
                  {p.bioEng.map((bp, i) => (
                    <p key={`${p.name}${i}`}>{bp.children[0].text}</p>
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

export default BoardEng;
