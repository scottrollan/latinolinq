import React from 'react';
import { Link } from 'react-router-dom';
// import { hr } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './Resources.module.scss';

const ResourcesEsp = () => {
  return (
    <div className={styles.resources}>
      <NavBar />
      <h1>RECURSOS</h1>
      <div className={styles.chunkArea}>
        <Link to="/ServiceEng" className={styles.translate}>
          <em className={styles.translate}>see this page in English</em>
        </Link>{' '}
        <div className={styles.chunk}>
          <h3>Trans Lifeline</h3>
          <p>
            ¡La línea directa de crisis y apoyo entre pares de Trans Lifeline
            lanzará una extensión en español el 1 de julio! Todos sus operadores
            son transgénero y no involucran al 911 ni a la policía en NINGUNA
            llamada sin su consentimiento explícito. Llame gratis: 877-565-8860!
          </p>
          <a className={styles.actionButton}>Llama a Trans LifeLine</a>
        </div>
        <div className={styles.chunk}>
          <h3>Recursos de Alianza Americas </h3>
          <p>
            Esta es una compilación de herramientas para proporcionar
            información, educar, motivar a tomar medidas, alentar a cuidarse
            unos a otros. Este es un documento vivo que seguiremos actualizando
            y agregando herramientas a medida que continuamos entendiendo la
            mejor manera de avanzar con nuestra agenda de justicia social. La
            mayoría de las herramientas son sólo en español.
          </p>
          <a className={styles.actionButton}>aprende más</a>
        </div>
        <div className={styles.chunk}>
          <h3>Apoyo Emocional de Georgia del COVID-19</h3>
          <p>
            <strong>Apoyo Emocional de Georgia del COVID-19</strong> ofrece
            asistencia gratuita y confidencial las 24 horas, los 7 días de la
            semana a las personas que llaman que necesitan apoyo emocional o
            información de recursos como resultado de la pandemia de COVID-19.
            La Línea de Apoyo Emocional está compuesta por voluntarios,
            incluidos profesionales de salud mental y otras personas que han
            recibido capacitación en consejería de crisis.
          </p>
          <a className={styles.actionButton}>
            Llama a Apoyo Emocional de Georgia del COVID-19
          </a>
        </div>
        <div className={styles.chunk}>
          <h3>Alianza Terapéutica Latina (CETPA)</h3>
          <p>
            <strong>Alianza Terapéutica Latina (CETPA)</strong> ofrece servicios
            de consejería para menores de 18 años hasta personas adultas de 65
            años de edad. Llame al 770.662.0249 para acceder servicio en español
            o visite http://www.cetpa.org
          </p>
          <span>
            <a className={styles.actionButton}>Llama a CETPA</a>
            <a className={styles.actionButton}>Visita CETPA.org</a>
          </span>
        </div>
        <div className={[`${styles.chunk} ${styles.lastChunk}`]}>
          <h3>Latino Community Fund - Georgia (LCFGA)﻿ &amp; UNIDOSGeorgia</h3>
          <p>
            Por la página LCFGA, puede ver información en españo y lenguas
            indígenas y revisar videos y otros recursos y materiales recopilados
            por organizaciones miembras de LCFGA.
          </p>
          <p>
            Si está con necesidad de comida o renta, lo invitamos a que visite
            UNIDOSGeorgia.com una página web dedicada a que encuentre ayuda de
            organizaciones comunitarias hispanas o latinas.
          </p>
          <span>
            <a className={styles.actionButton}>LCFGA</a>
            <a className={styles.actionButton}>UNIDOSGeorgia</a>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesEsp;
