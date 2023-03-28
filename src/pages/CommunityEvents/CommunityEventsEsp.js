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
      <Link to="/CommunityEventsEng" className={styles.translate}>
        <em className={styles.translate}>see this page in English</em>
      </Link>
      <h1>Diálogos Comunitarios</h1>
      <p>
        Participa en la siguiente cita de Diálogos Comunitarios, donde
        conviviremos (29 de marzo, 12 de abril a partir de las 6 pm) y crearemos
        comunidad. Tu participación será valiosa porque los diálogos
        contribuirán al diseño de un mural, el cual le pertenecerá a la
        comunidad de Buford Highway. Se proveerá comida. También se ofrecerá
        interpretación (inglés). Favor de inscribirse{' '}
        <a
          href="https://docs.google.com/forms/d/1_2mgXnpZru5LHJGsfkdg7Q1KtbKWTmV125fN3kYh52c/viewform?edit_requested=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          aquí
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
