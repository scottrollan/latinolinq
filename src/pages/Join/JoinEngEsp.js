import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { fetchJobs } from '../../api/client';
import parse from 'html-react-parser';
import { Button } from 'react-bootstrap';
import { createRandomString } from '../../functions/CreateRandomString';
import styles from './Join.module.scss';

export default function JoinEngEsp() {
  const [jobs, setJobs] = useState([]);

  const fetchOpenJobs = async () => {
    let openJobs = [];
    const allJobs = await fetchJobs;

    allJobs.forEach((j) => {
      let currentJob = {
        title: j.jobTitle,
        description: parse(j.jobDescription),
        active: j.active,
      };
      if (currentJob.active) {
        openJobs.push(currentJob);
      }
    });
    setJobs(openJobs);
  };

  useEffect(() => {
    fetchOpenJobs();
  }, []);
  const showMyInfo = (showBtn, details) => {
    window.document
      .getElementById(showBtn)
      .setAttribute('style', 'display: none;');
    window.document
      .getElementById(details)
      .setAttribute('style', 'display: block;');
  };

  const hideMyInfo = (details, showBtn) => {
    window.document
      .getElementById(details)
      .setAttribute('style', 'display: none;');
    window.document
      .getElementById(showBtn)
      .setAttribute(
        'style',
        'display: flex; flex-direction: row; justify-content: center;'
      );
  };

  return (
    <div className={styles.join}>
      <NavBar />
      <h1>Join Latino LinQ / Únete a Latino LinQ</h1>
      <div className={styles.jobList}>
        {jobs.map((j, idx) => {
          const keyStr = createRandomString(4);
          return (
            <div
              key={`${keyStr}${idx}`}
              className={styles.posting}
              style={{
                borderBottom:
                  jobs.length > 0 && idx < jobs.length - 1
                    ? '1px solid black'
                    : 'none',
              }}
            >
              <div style={{ width: '100%', textAlign: 'center' }}>
                <h4>{j.title}</h4>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                  id={`showBtn${keyStr}`}
                >
                  <Button
                    className={styles.seeMore}
                    onClick={() =>
                      showMyInfo(`showBtn${keyStr}`, `info${keyStr}`)
                    }
                  >
                    See More...
                  </Button>
                </div>
              </div>
              <div id={`info${keyStr}`} style={{ display: 'none' }}>
                <div style={{ width: '100%', textAlign: 'center' }}>
                  <Button
                    className={styles.seeMore}
                    onClick={() =>
                      hideMyInfo(`info${keyStr}`, `showBtn${keyStr}`)
                    }
                  >
                    See Less
                  </Button>
                </div>
                <div className={styles.details}>{j.description}</div>
                <Button
                  className={styles.seeMore}
                  onClick={() =>
                    hideMyInfo(`info${keyStr}`, `showBtn${keyStr}`)
                  }
                >
                  See Less
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}
