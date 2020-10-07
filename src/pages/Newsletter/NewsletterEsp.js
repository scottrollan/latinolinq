import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import $ from 'jquery';
import { Form, Button } from 'react-bootstrap';
import RaisedHands from '../../assets/02.jpg';
import styles from './Newsletter.module.scss';

const NewsletterEng = (e) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(
    'por favor suscríbeme al Boletín Latino Linq'
  );

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const signUpNewsletter = () => {
    const data = {
      'form-name': 'newsletter',
      name,
      email,
      message,
    };

    fetch('/', {
      method: 'POST',
      body: encode(data),
    })
      .then(() => {
        setStatus('Form Submission Successful!');
        $('#alertMessageSent').css('display', 'flex');
        $('#alertMessageSent').delay(1500).fadeOut(1000);
        setName('');
        setEmail('');
        setMessage('');
        $('#contactForm')[0].reset();
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
      <NavBar />
      <Link to="/NewsletterEsp" className={styles.translate}>
        <em className={styles.translate}>ver esta página en español</em>
      </Link>
      <div className={styles.columns}>
        <div className={styles.column1}>
          <h1>Newsletter Sign-up</h1>
          <Form onSubmit={signUpNewsletter}>
            <Form.Group controlId="formBasicEmail">
              <input type="hidden" name="form-name" value="newsletter" />
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
                onChange={handleChange}
                required
              />
              <Form.Label>Dirección de correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
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

export default NewsletterEng;
