import React from 'react';
import styles from './Footer.module.scss';
import Name from '../assets/Latino LinQ Logo Text.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={Name} alt="Latino LinQ" className={styles.logoText} />
      <div className={styles.social}>
        <a href="https://www.facebook.com/latinolinq">
          <i className={[`fab fa-facebook-square ${styles.icon}`]}></i>
        </a>
        <a href="https://www.instagram.com/latinolinq/">
          <i className={[`fab fa-instagram ${styles.icon}`]}></i>
        </a>
        <a href="https://twitter.com/latinolinq">
          <i className={[`fab fa-twitter-square ${styles.icon}`]}></i>
        </a>
      </div>
      <a
        className={styles.contact}
        href="mailto:latinolinq@gmail.com?subject='contact from website'"
      >
        LatinoLinQ@gmail.com
      </a>
      <a className={styles.contact} href="tel:678-744-5467">
        678-744-LINQ (678-744-5467)
      </a>
    </div>
  );
};

export default Footer;
