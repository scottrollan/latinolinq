import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { fetchBoard } from '../../api/client';
import styles from './Board.module.scss';

const BoardEsp = () => {
  const [board, setBoard] = useState([]);

  const fetchBoardMembers = async () => {
    let boardMembers = [];
    const member = await fetchBoard;

    member.forEach((m) => {
      const rawRef = m.memberImage.asset._ref;
      const refArray = rawRef.split('-');
      const src = `https://cdn.sanity.io/images/q4pr99l8/production/${refArray[1]}-${refArray[2]}.${refArray[3]}`;
      let currentMember = {
        name: m.name,
        titleEsp: m.titleEsp,
        bioEsp: m.bioEsp,
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
      <Link to="/BoardEng" className={styles.translate}>
        <em className={styles.translate}>see this page in English</em>
      </Link>
      <h1>Junta Directiva</h1>
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
              <h3
                style={{
                  alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end',
                }}
              >
                {p.name}, {p.titleEsp}
              </h3>
              <div
                className={styles.imageBio}
                style={{
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                }}
              >
                <div className={styles.imageWrapper}>
                  <img src={p.src} alt="" />
                </div>

                <div className={styles.bio}>
                  {p.bioEsp.map((bp, i) => (
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

export default BoardEsp;
