import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import $ from 'jquery';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import AlertMessageSent from '../../components/AlertMessageSentEsp';
import styles from './Contact.module.scss';

const ContactEsp = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    const data = { 'form-name': 'contact', name, email, message };

    fetch('/', {
      method: 'POST',
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data),
    })
      .then(() => {
        setStatus('¡Mensaje enviado!');
        $('#alertMessageSentEsp').css('display', 'flex');
        $('#alertMessageSentEsp').delay(1500).fadeOut(1000);
        setName('');
        setEmail('');
        setMessage('');
        $('#contactForm')[0].reset();
      })
      .catch((error) => {
        setStatus('Form Submission Failed!');
        console.log(status, error);
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
    if (name === 'message') {
      return setMessage(value);
    }
  };

  return (
    <div className={styles.contact}>
      <NavBar />
      <Link to="/ContactEng" className={styles.translate}>
        <em className={styles.translate}>see this page in English</em>
      </Link>
      <Form
        onSubmit={handleSubmit}
        // action="/thank-you/"
        style={{
          minHeight: '100vh',
          width: '100%',
          padding: '0 calc(50% - 320px',
        }}
        id="contactForm"
      >
        <input type="hidden" name="form-name" value="contact" />
        <AlertMessageSent message={status} />
        <h1>Contáctanos</h1>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Tu nombre y apellido"
          required
          className={styles.inputs}
        />

        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
          className={styles.inputs}
        />

        <Form.Control
          as="textarea"
          name="message"
          value={message}
          onChange={handleChange}
          rows="10"
          placeholder="Tu menssaje..."
          required
          className={styles.inputs}
        />
        <Button
          variant="secondary"
          className={styles.contactButton}
          type="submit"
        >
          Enviar
        </Button>
      </Form>
      <Footer />
    </div>
  );
};

export default ContactEsp;
