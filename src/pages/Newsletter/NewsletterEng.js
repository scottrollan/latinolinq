import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Form, Button } from 'react-bootstrap';
import RaisedHands from '../../assets/02.jpg';
import styles from './Newsletter.module.scss';

const NewsletterEng = () => {
  const signUpNewsletter = () => {
    //hit chimpmail
  };

  return (
    <div className={styles.newsletter}>
      <NavBar />
      <Link to="/NewsletterEsp" className={styles.translate}>
        <em className={styles.translate}>ver esta página en español</em>
      </Link>
      <div className={styles.columns}>
        <div className={styles.column1}>
          <h1>Newsletter Sign-up</h1>
          <Form onSubmit={signUpNewsletter}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" required />
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button className={styles.submit} type="submit">
              SIGN UP
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

export default NewsletterEng;
