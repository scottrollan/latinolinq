import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './About.module.scss';
import src from '../../assets/03.jpg';

const AboutEng = () => {
  return (
    <div className={styles.about}>
      <NavBar />
      <Link to="/AboutEsp" className={styles.translate}>
        <em>ver esta página en español</em>
      </Link>
      <div className={styles.section1}>
        <div className={styles.blurb}>
          <h1>Our Mission</h1>

          <h5>
            Latino LinQ advances LGBTQ equity by facilitating support services
            to Latinx LGBTQ people, and their families, in the areas of health
            care and legal assistance.
          </h5>

          <h5>We carry out our mission by:</h5>
          <ul>
            <li>Providing direct services</li>
            <li>
              Facilitating information, education and training sessions for
              individuals and groups interested in expanding our mission to
              advance LGBTQ equity
            </li>
          </ul>
        </div>
        <img src={src} alt="" className={styles.mainPic} />
      </div>
      <br />
      <div className={styles.section2}>
        <h1>Vision</h1>
        <p style={{ textAlign: 'center' }}>
          A world in which LGBTQ people from across diverse Latinx communities
          can live their full lives with dignity, respect, and free from
          discrimination.{' '}
        </p>
      </div>
      <div className={styles.section3}>
        <h1>About Us</h1>
        <div className={styles.blurbs}>
          <div>
            <p>
              Since its founding in 2015, Latino LinQ volunteers have been
              serving the Latinx community in Georgia. Latino LinQ was
              established to provide support to a diversity-rich community in
              terms of gender identity, emphasizing the importance of creating
              welcoming spaces.
            </p>
          </div>
          <div>
            <p>
              Over time, our mission has not changed, but we have aligned our
              mission statement with the type of work performed to date and to
              reflect our focus – the LGBTQ community. Our mission statement
              read as follows: Latino LinQ aims to advance LGBTQ equity by
              facilitating support services to Latinx LGBTQ people, and their
              families, in the areas of health care and legal assistance. We
              carry out our mission by providing direct services and by
              facilitating information, education, and training sessions for
              individuals and groups interested in expanding our mission.
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
      <Footer />
    </div>
  );
};

export default AboutEng;
