import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Form, Button } from 'react-bootstrap';
import RaisedHands from '../../assets/02.jpg';
import styles from './Newsletter.module.scss';

const NewsletterEsp = () => {
  const signUpNewsletter = () => {
    //hit chimpmail
  };

  return (
    <div className={styles.newsletter}>
      <NavBar />
      <Link to="/NewsletterEng" className={styles.translate}>
        <em className={styles.translate}>see this page in English</em>
      </Link>
      <div className={styles.columns}>
        <div className={styles.column1}>
          <h1>Suscríbase al Boletín</h1>
          <Form onSubmit={signUpNewsletter}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nombre y Apellido *</Form.Label>
              <Form.Control type="text" required />
              <Form.Label>Correo Electrónico *</Form.Label>
              <Form.Control type="email" required />
              <Form.Text className="text-muted">
                Nunca compartiremos su dirección de correo electrónico
              </Form.Text>
            </Form.Group>
            <Button className={styles.submit} type="submit">
              Suscríbase
            </Button>
          </Form>
        </div>
        <div className={styles.column2}>
          <img src={RaisedHands} alt="" className={styles.image} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsletterEsp;
