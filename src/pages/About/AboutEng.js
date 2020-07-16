import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.scss';
import src from '../../assets/03.jpg';

const AboutEng = () => {
  return (
    <div className={styles.about}>
      <div className={styles.section1}>
        <img src={src} alt="" className={styles.mainPic} />
        <div className={styles.inset}>
          <div className={styles.insetBlurb}>
            <h2>
              <b>Our Mission</b>
            </h2>
            <p>
              Latino LinQ advances LGBTQ equity by facilitating support services
              to Latinx LGBTQ people, and their families, in the areas of health
              care and legal assistance.
            </p>
            <p>We carry out our mission by:</p>
            <ul style={{ listStyle: 'square inside' }}>
              <li>Providing direct services</li>
              <li>
                Facilitating information, education and training sessions for
                individuals and groups interested in expanding our mission to
                advance LGBTQ equity
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <h2>Vision</h2>
        <p>
          A world in which LGBTQ people from across diverse Latinx communities
          can live their full lives with dignity, respect, and free from
          discrimination.{' '}
        </p>
      </div>
      <div className={styles.section3}>
        <h2>About Us</h2>
        <div>
          <p>
            Since its founding in 2015, Latino LinQ volunteers have been serving
            the Latinx community in Georgia. Latino LinQ was established to
            provide support to a diversity-rich community in terms of gender
            identity, emphasizing the importance of creating welcoming spaces.
          </p>
        </div>
        <div>
          <p>
            Over time, our mission has not changed, but we have aligned our
            mission statement with the type of work performed to date and to
            reflect our focus – the LGBTQ community. Our mission statement read
            as follows: Latino LinQ aims to advance LGBTQ equity by facilitating
            support services to Latinx LGBTQ people, and their families, in the
            areas of health care and legal assistance. We carry out our mission
            by providing direct services and by facilitating information,
            education, and training sessions for individuals and groups
            interested in expanding our mission.
          </p>
        </div>
        <div>
          <p>
            As a Latinx-led community-based organization, Latino LinQ focuses
            its efforts to create awareness throughout the Latinx community
            about the inequality our LGBTQ brothers and sisters still face
            today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEng;
