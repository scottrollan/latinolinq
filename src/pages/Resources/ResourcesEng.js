import React from 'react';
import { Link } from 'react-router-dom';
// import { hr } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './Resources.module.scss';

const ResourcesEng = () => {
  return (
    <div className={styles.resources}>
      <NavBar />
      <h1>Resources</h1>
      <div className={styles.chunkArea}>
        <Link to="/ResourcesEsp" className={styles.translate}>
          <em className={styles.translate}>ver esta página en español</em>
        </Link>{' '}
        <div className={styles.chunk}>
          <h3>Trans Lifeline</h3>
          <p>
            Trans Lifeline’s peer support &amp; crisis hotline is launching a
            Spanish extension on July 1! All their operators are transgender,
            and they don’t involve 911 or police on ANY calls without your
            explicit consent. Call toll free: 877-565-8860
          </p>
          <a className={styles.actionButton} href="tel:18775658860">
            Call Trans LifeLine
          </a>
        </div>
        <div className={styles.chunk}>
          <h3>Alianza Americas Resources </h3>
          <p>
            A constantly updated resources pages with trustworthy, curated
            information— in understandable formats, mostly in Spanish. Several
            members have also worked hard to include information in indigenous
            languages.
          </p>
          <a
            className={styles.actionButton}
            href="https://docs.google.com/document/d/1sC2sEoBbAK3paR0lH3UB18kwvEitt2t68q10v2DyYyM/edit"
          >
            Learn More
          </a>
        </div>
        <div className={styles.chunk}>
          <h3>Georgia COVID-19 Emotional Support Line</h3>
          <p>
            <strong>
              Georgia COVID-19 Emotional Support Line (800.399.8938)
            </strong>{' '}
            - offers 24/7 free and confidential assistance to callers needing
            emotional support or resource information as a result of the
            COVID-19 pandemic. The Emotional Support Line is staffed by
            volunteers, including mental health professionals and others who
            have received training in crisis counseling.{' '}
          </p>
          <a className={styles.actionButton} href="tel:18003998938">
            Call Georgia COVID-19 Emotional Support Line
          </a>
        </div>
        <div className={styles.chunk}>
          <h3>View Point Health</h3>
          <p>
            View Point Health offers counseling services for children under 18
            and to adults up to 65 years of age. Call 678-209-2411 or visit
            their web page to inquire about services
          </p>
          <span>
            <a className={styles.actionButton} href="tel:16782092411">
              Call View Point Health
            </a>
            <a
              className={styles.actionButton}
              href="https://www.myviewpointhealth.org/"
            >
              Visit View Point Health
            </a>
          </span>
        </div>
        <div className={[`${styles.chunk} ${styles.lastChunk}`]}>
          <h3>Latino Community Fund - Georgia (LCFGA)﻿ &amp; UNIDOSGeorgia</h3>
          <p>
            Through this page you can view information in Spanish and indigenous
            languages, and review videos and other resources and materials
            collected by LCFGA member organizations.
          </p>
          <p>
            If you are in need of food or rent assistance, we invite you to
            visit UNIDOSGeorgia.com - a website dedicated to finding help from
            Hispanic or Latino community organizations.
          </p>
          <span>
            <a
              className={styles.actionButton}
              href="https://lcfgeorgia.org/covid-19-relief/"
            >
              LCFGA
            </a>
            <a
              className={styles.actionButton}
              href="http://www.unidosgeorgia.com/"
            >
              UNIDOSGeorgia
            </a>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesEng;
