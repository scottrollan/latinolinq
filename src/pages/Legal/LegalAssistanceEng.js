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

// const resources = [
//   {
//     org: 'The Luncheon Lawyer',
//     address: null,
//     phone: '470-588-1876',
//     web2: '',
//     web: 'http://www.theluncheonlawfirm.com',
//     text: (
//       <p>
//         ...specializing in criminal defense matters and restraining orders. Ms.
//         Luncheon is bilingual.
//       </p>
//     ),
//   },
//   {
//     org: 'The Law Office of Lori M. Surmay',
//     address: (
//       <div>
//         PO Box 98403 <br />
//         Atlanta, GA 30359
//       </div>
//     ),
//     phone: '678-883-8893',
//     web: 'www.AtlBabyLaw.com',
//     web2: '',
//     text: (
//       <p>
//         Ms. Surmay specializes in family planning to include the LGBTQ
//         community. When contacting her office, please give her your contact
//         information so she can secure an interpreter for family planning
//         consultations.
//       </p>
//     ),
//   },
//   {
//     org: 'Bexley & Deloach, LLC',
//     web: 'www.bexleydeloach.com',
//     web2: '',
//     address: (
//       <div>
//         59 Scenic Highway S.
//         <br />
//         Lawrenceville, GA 30046
//       </div>
//     ),
//     phone: '770-689-6006',
//     text: (
//       <p>
//         Specializes in small business law, family law, estate planning and
//         probate, nonprofit law, personal injury, criminal law, and immigration
//         law.
//       </p>
//     ),
//   },
//   {
//     org: 'DeMedeiros Injury Law',
//     web: 'www.pick-rick.com',
//     web2: 'www.estoyaccidentado.com',
//     address: (
//       <div>
//         2400 Old Milton Parkway #386
//         <br />
//         Alpharetta, GA 30009
//       </div>
//     ),
//     text: (
//       <p>
//         “At DeMedeiros Injury Law, we treat every client with the respect and
//         dignity they deserve. We stand as proud allies of the Latinx LGBTQ
//         community.”
//       </p>
//     ),
//   },
//   {
//     org: 'Speed King Law',
//     web: 'www.speedkinglaw.com',
//     web2: null,
//     phone: null,
//     address: null,
//     text: (
//       <p>
//         Spanish speaking attorneys specializing in motor vehicle accidents,
//         nursing home neglect, premises liability, wrongful death, and medical
//         malpractice.
//       </p>
//     ),
//   },
// ];
