import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import image from '../../assets/Announcement.png';
import styles from './CommunityEvents.module.scss';

export default function ComunityEventsEng() {
  return (
    <div className={styles.communityEvents}>
      <NavBar />
      <Link to="/CommunityEventsEsp" className={styles.translate}>
        <em className={styles.translate}>ver esta página en español</em>
      </Link>
      <h1>Community Dialogues</h1>
      <p>
        Participate in the next Community Dialogues community meet up,where we
        will come together (March 29th, and April 12th starting at 6 pm) for
        food and community-building. Your participation will be valuable because
        the dialogue will contribute to Yehimi Cambron's design of a mural by
        and for the Buford Highway community. Food will be served.
        Interpretation services (Spanish)will be provided. Please sign up{' '}
        <a
          href="https://docs.google.com/forms/d/1_2mgXnpZru5LHJGsfkdg7Q1KtbKWTmV125fN3kYh52c/viewform?edit_requested=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <div className={styles.imageWrapper}>
        <Image src={image} alt="" className={styles.image} />
      </div>
      <Footer />
    </div>
  );
}
