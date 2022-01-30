import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Button } from 'react-bootstrap';
import { createRandomString } from '../../functions/CreateRandomString';
import styles from './Join.module.scss';

export default function JoinEngEsp() {
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
      <div>
        {jobPosts.map((j, idx) => {
          const keyStr = createRandomString(4);
          return (
            <div
              className={styles.posting}
              style={{
                borderBottom:
                  jobPosts.length > 0 && idx < jobPosts.length - 1
                    ? '1px solid black'
                    : 'none',
              }}
            >
              <div style={{ width: '100%', textAlign: 'center' }}>
                <h4 key={`${keyStr}${idx}`}>{j.position}</h4>
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
                <div className={styles.details}>
                  <div>{j.details}</div>
                </div>
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

const jobPosts = [
  {
    position: 'Job Post: HIV Services Coordinator',
    details: (
      <div>
        <div>
          <span style={{ textDecoration: 'underline' }}>Posting date:</span>
          &nbsp;January 28, 2022
        </div>
        <div>
          <span style={{ textDecoration: 'underline' }}>
            Anticipated start date:
          </span>
          &nbsp;ASAP
        </div>
        <div>
          <span style={{ textDecoration: 'underline' }}>Pay rate:</span>
          &nbsp;$25/hour
        </div>
        <div style={{ fontStyle: 'italic' }}>
          This is a part-time, temporary position with a flexible work schedule
          between 8-10 hours per week. We expect contract deliverables to be
          completed by the end of December 2022.
        </div>
        <div>
          <div className={styles.subHeader}>About Latino LinQ</div>
          <div>
            Latino LinQ is a nonprofit organization in Georgia advocating for a
            world in which Latinx LGTBQ+ individuals and their families can live
            authentically, with dignity and respect. Our mission is to increase
            equity and promote wellbeing for Latinx LGBTQ+ communities
            throughout the South.
          </div>
        </div>
        <div>
          <div className={styles.subHeader}>About the position</div>
          <div>
            We are seeking an HIV-Services Coordinator for a grant-funded
            position who is detail-oriented, self-driven, and holds a passion
            for HIV prevention and sexual health. This individual will connect
            Atlanta’s LGBTQ Latino community to HIV-testing, linkage to PrEP or
            HIV-care services. As a volunteer-led and operated organization,
            Latino LinQ offers its HIV testing and referral services free to the
            community in diverse settings across the Metro-Atlanta region. By
            partnering with Positive Impact Health Centers (PIHC), this position
            will strengthen Latino LinQ’s culturally responsive HIV testing
            program, while educating the greater Atlanta Latino community on HIV
            and sexual health. The ideal candidate must work remotely and
            in-person, as COVID-19 allows. Latino LinQ will provide access to
            PPE and rapid COVID-19 testing to staff attending in-person events.
          </div>
        </div>
        <div>
          <div className={styles.subHeader}>Duties and Responsibilities</div>
          <div>
            <ul>
              <li>
                Identify community-based sites to provide HIV testing to the
                Latinx community.
              </li>
              <li>
                Provide confidential, rapid HIV-testing in community-based
                settings.
              </li>
              <li>
                Connect clients to appropriate agencies for their HIV
                prevention/care needs.
              </li>
              <li>
                Manage client data with care and create a de-identified database
                of clients.
              </li>
              <li>Assist with reporting data to grant funders.</li>
              <li>
                Enhance engagement in care by assisting clients with appointment
                reminders and general encouragement.
              </li>
              <li>
                Follow-up with clients to overcome barriers to getting and
                remaining in care.
              </li>
              <li>
                Facilitate linkage to mental health, housing, legal, or other
                needed support services.
              </li>
              <li>Train and oversee HIV-testing volunteers.</li>
              <li>
                Amplify Latino LatinQ’s testing services/events on social media.
              </li>
              <li>
                Provide information at community health fairs, festivals, or
                other community events.
              </li>
              <li>Other duties as assigned.</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.subHeader}>Knowledge, Skills, Abilities</div>
          <div>
            <ul>
              <li>Knowledge of HIV transmission, prevention, and care.</li>
              <li>
                A general understanding of medication adherence and barriers to
                adherence.
              </li>
              <li>
                Knowledge of sexually transmitted infections (STIs), their
                connection to HIV, their impact on the health of PLHIV.
              </li>
              <li>Ability to work with diverse groups.</li>
              <li>
                Strong interpersonal skills and commitment to cultural
                responsiveness.
              </li>
              <li>
                Knowledge of Latinx-LGBTQ issues and issues related to social
                justice.
              </li>
              <li>
                Detail-oriented with excellent organizing and communications
                skills.
              </li>
              <li>
                Strong writing and computer skills (Word, Excel, Powerpoint,
                etc.)
              </li>
              <li>Flexibility regarding work hours.</li>
              <li>Ability to self-manage and report to remote supervisors.</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.subHeader}> Preferred Qualifications</div>
          <ul>
            <li>Spanish and English fluency</li>
            <li>Strong connections to the LGBTQ+, Latinx Community</li>
            <li>Life experience with HIV/AIDS</li>
            <li>
              Two years of experience as an HIV-testing Counselor or HIV-Case
              Manager OR two years of experience serving Latinx people in a
              direct service agency or other health setting
            </li>
          </ul>
        </div>
        <div>
          <div className={styles.subHeader}>How to apply</div>
          <p>
            Latino LinQ is an Equal Opportunity Employer and does not
            discriminate against any employee or applicant for employment
            because of race, color, sex, age, national origin, religion, sexual
            orientation, gender identity, status as a veteran, and basis of
            disability or any other federal, state, or local protected class.
            People with strong connections to the Latino, LGBTQ community, and
            people living with HIV are strongly encouraged to apply.
          </p>
          <p>
            Please send a cover letter, resume, and two references to{' '}
            <span style={{ fontWeight: 'bold' }}>latinolinq@gmail.com</span>{' '}
            with “HIV Services Coordinator” in the subject line.{' '}
            <span style={{ fontWeight: 'bold' }}>
              This position is open until filled and with the application
              deadline of Feb 16th.
            </span>
          </p>
        </div>
      </div>
    ),
  },
];
