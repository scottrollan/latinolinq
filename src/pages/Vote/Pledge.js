import React, { useState, useContext } from 'react';
import { PledgesContext } from '../../App';
import { createRandomString } from '../../functions/CreateRandomString';
import { Client } from '../../api/client';
import { Form, Button } from 'react-bootstrap';
import styles from './Vote.module.scss';

export default function Pledge({ language }) {
  const thisCampaign = useContext(PledgesContext);
  const signerList = thisCampaign.signers ?? [];
  const pledgeLength = signerList.length;
  const [isPledging, setIsPledging] = useState(false);
  const [input, setInput] = useState({});

  const pledgeMe = async (e) => {
    e.preventDefault();
    let updatedList = [...signerList];
    let key = createRandomString(12);
    const newSigner = {
      ...input,
      _type: 'signer',
      _key: key,
      notes: '',
    };
    updatedList = [...updatedList, newSigner];

    let doc = {
      _id: thisCampaign._id,
      _type: 'signup',
      name: thisCampaign.name,
      signers: updatedList,
    };
    let response = await Client.createOrReplace(doc).catch((err) => {
      alert('Oh no, the update failed: ', err.message);
      return;
    });
    console.log(response._updatedAt);
  };

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  return (
    <>
      {/* //////ENGLISH */}
      <div style={{ display: language === 'english' ? 'block' : 'none' }}>
        <div
          style={{
            display: isPledging ? 'flex' : 'none',
            flexDirection: 'column',
          }}
        >
          You can count on me to vote in the senate run-off election on January
          5.
          <Form onSubmit={(e) => pledgeMe(e)}>
            <Form.Group controlId="pledgeName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your full name"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="pledgeEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button className={styles.green} type="submit">
              Pledge to Vote
            </Button>
          </Form>
        </div>
        <div style={{ display: isPledging ? 'none' : 'block' }}>
          <div className={styles.title}>
            Join{' '}
            <span style={{ color: 'var(--linq-green)' }}>{pledgeLength}</span>{' '}
            others and...
          </div>
          <Button className={styles.green} onClick={() => setIsPledging(true)}>
            Pledge to Vote
          </Button>
        </div>
      </div>
      {/* /////Spanish */}
      <div style={{ display: language !== 'english' ? 'block' : 'none' }}>
        <div
          style={{
            display: isPledging ? 'flex' : 'none',
            flexDirection: 'column',
          }}
        >
          Puede contar conmigo para votar en la segunda vuelta del Senado el 5
          de enero..
          <Form onSubmit={pledgeMe}>
            <Form.Group controlId="pledgeName">
              <Form.Label>Nombre y appellido</Form.Label>
              <Form.Control
                type="name"
                name="name"
                placeholder="Nombre y apellido"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="pledgeEmail">
              <Form.Label>Dirección de correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Ingrese su dirección de correo electrónico"
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                Nunca compartiremos su correo electrónico con nadie más.
              </Form.Text>
            </Form.Group>
            <Button className={styles.green} type="submit">
              prometa votar
            </Button>
          </Form>
        </div>
        <div style={{ display: isPledging ? 'none' : 'block' }}>
          <div className={styles.title}>
            Únete a otrxs
            <span style={{ color: 'var(--linq-green)' }}>{pledgeLength}</span> y
            ...{' '}
          </div>
          <Button className={styles.green} onClick={() => setIsPledging(true)}>
            prometa votar
          </Button>
        </div>
      </div>
    </>
  );
}
