import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './Services.module.scss';

const ServicesEng = () => {
  return (
    <div className={styles.services}>
      <NavBar />
      <p className={styles.translate}>ver esta página en español</p>
      <h1>Direct Services</h1>
      <div className={styles.columns}>
        <div className={styles.singleColumn}>
          <div className={styles.imageWrapper1}></div>
          <h3>Mutual Support and Discussion Group</h3>
          <p>
            The Mutual Support and Discussion Group is a place where gays,
            lesbians, and transsexuals can freely express themselves and share
            their experiences from which others can gain knowledge.{' '}
          </p>
        </div>
        <div className={styles.singleColumn} style={{ marginTop: '12rem' }}>
          <div className={styles.imageWrapper2}></div>
          <h3>Referrals</h3>
          <h4>help accessing needed services</h4>
          <p>
            Are you looking for a service or program, and need help finding it?
            Call us (678-744-LINQ o 678-744-5467) or send an email
            (LatinoLinQ@gmail.com) with your question. Our volunteers will help!
          </p>
        </div>
        <div className={styles.singleColumn}>
          <div className={styles.imageWrapper3}></div>
          <h3>Health education workshops and HIV prevention</h3>
          <p>
            We promote health through educational activities with small or large
            groups. We also promote HIV prevention through awareness, condoms,
            and referrals to HIV testing.
          </p>
        </div>
      </div>
      <a href="tel:678-744-5467" className={styles.contactButton}>
        {' '}
        Call Us Now
      </a>
      <a href="mailto:latinolinq@gmail.com" className={styles.contactButton}>
        Email Us
      </a>
      <Footer />
    </div>
  );
};

export default ServicesEng;
