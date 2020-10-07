import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import AlertMessageSentEng from '../../components/AlertMessageSentEng';
import Footer from '../../components/Footer';
import $ from 'jquery';
import { Form, Button } from 'react-bootstrap';
import RaisedHands from '../../assets/02.jpg';
import styles from './Newsletter.module.scss';

//latinolinq@gmail.com

const NewsletterEng = () => {
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
      message: 'please sign me up for the Latino Linq Newsletter',
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
        $('#newsletterEng')[0].reset();
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
  };
  return (
    <div className={styles.newsletter}>
      <AlertMessageSentEng message={status} />
      <NavBar />
      <Link to="/NewsletterEsp" className={styles.translate}>
        <em className={styles.translate}>ver esta página en español</em>
      </Link>
      <div className={styles.columns}>
        <div className={styles.column1}>
          <h1>Newsletter Sign-up</h1>
          <Form onSubmit={signUpNewsletter} id="newsletterEng">
            <Form.Group controlId="formBasicEmail">
              <input type="hidden" name="form-name" value="newsletter" />
              <input
                type="hidden"
                name="message"
                value="Please add me to your newsletter"
              />
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                // id="name"
                name="name"
                value={name}
                onChange={(e) => handleChange(e)}
                required
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                // id="email"
                name="email"
                value={email}
                onChange={(e) => handleChange(e)}
                required
              />
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
