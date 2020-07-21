import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './Services.module.scss';

const ServicesEsp = () => {
  return (
    <div className={styles.services}>
      <NavBar />
      <Link to="/ServicesEng" className={styles.translate}>
        <em className={styles.translate}>see this page in English</em>
      </Link>
      <h1>Servicios Directos</h1>
      <div className={styles.columns}>
        <div className={styles.singleColumn}>
          <div className={styles.imageWrapper1}></div>
          <h3>Grupo de Platica y Apoyo Mutuo</h3>
          <p>
            El grupo de plática y apoyo mutuo es un espacio donde las personas
            gays, lesbianas y transexuales se puedan expresar libremente en
            relación a su propia homosexualidad y transexualidad compartiendo
            sus experiencias y aprendiendo de los demás, a través de dinámicas y
            ejercicios prácticos.{' '}
          </p>
        </div>
        <div className={styles.singleColumn} style={{ marginTop: '12rem' }}>
          <div className={styles.imageWrapper2}></div>
          <h3>Referidos</h3>
          <h4>Ayuda para acceder servicios necesitados</h4>
          <p>
            Estás buscando un servicio o programa, pero necesitas ayuda para
            encontrarlo? Llamenos al 678-744-LINQ (678-744-5467) o envianos un
            email con tu pregunta (LatinoLinQ@gmail.com). Nuestros voluntarios
            te ayudaran!
          </p>
        </div>
        <div className={styles.singleColumn}>
          <div className={styles.imageWrapper3}></div>
          <h3>Talleres educativos de salud y prevención del VIH </h3>
          <p>
            Ayudamos a promover la salud a través de actividades educativas con
            grupos pequeños o grandes. También promovemos la prevención del VIH
            a través de la conciencia, los condones, y referidos a las pruebas
            del VIH.
          </p>
        </div>
      </div>
      <a href="tel:678-744-5467" className={styles.contactButton}>
        {' '}
        Llámanos
      </a>
      <a href="mailto:latinolinq@gmail.com" className={styles.contactButton}>
        Envíanos un correo electrónico
      </a>
      <Footer />
    </div>
  );
};

export default ServicesEsp;
