import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import AlertMessageSentEsp from '../../components/AlertMessageSentEsp';
import Footer from '../../components/Footer';
import $ from 'jquery';
import { Form, Button } from 'react-bootstrap';
import RaisedHands from '../../assets/02.jpg';
import styles from './Newsletter.module.scss';

const NewsletterEsp = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const signUpNewsletter = (e) => {
    const data = {
      'form-name': 'newsletter',
      name,
      email,
      message: 'por favor suscríbeme al Boletín Latino Linq',
    };

    fetch('/', {
      method: 'POST',
      body: encode(data),
    })
      .then(() => {
        setStatus('¡Gracias por suscribirse a nuestro boletín!');
        $('#alertMessageSentEsp').css('display', 'flex');
        $('#alertMessageSentEsp').delay(1500).fadeOut(1000);
        setName('');
        setEmail('');

        $('#newsletterEsp')[0].reset();
      })
      .catch((error) => {
        setStatus('Form Submission Failed!');
        console.log(error);
        alert(status);
      });
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      return setName(value);
    }
    if (name === 'email') {
      return setEmail(value);
    }
  };
  return (
    <div className={styles.newsletter}>
      <AlertMessageSentEsp message={status} />
      <NavBar />
      <Link to="/NewsletterEng" className={styles.translate}>
        <em className={styles.translate}>see this page in English</em>
      </Link>
      <div className={styles.columns}>
        <div className={styles.column1}>
          <h1>Inscríbase al boletín</h1>
          <Form onSubmit={(e) => signUpNewsletter(e)} id="newsletterEsp">
            <Form.Group controlId="formBasicEmail">
              <input type="hidden" name="form-name" value="newsletter" />
              <input
                type="hidden"
                name="email"
                value="por favor suscríbeme al Boletín Latino Linq"
              />
              <input
                type="hidden"
                name="message"
                value="Please add me to your newsletter"
              />
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => handleChange(e)}
                required
              />
              <Form.Label>Dirección de correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => handleChange(e)}
                required
              />
              <Form.Text className="text-muted">
                Nunca compartiremos su correo electrónico con nadie más.{' '}
              </Form.Text>
            </Form.Group>
            <Button className={styles.submit} type="submit">
              Regístrate
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
