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
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const pledgeMe = async () => {
    let updatedList = [...signerList];
    let key = createRandomString(12);
    const newSigner = {
      _type: 'signer',
      _key: key,
      email: email,
      name: name,
      notes: '',
    };
    updatedList = [...updatedList, newSigner];

    let doc = {
      _id: thisCampaign._id,
      _type: 'signup',
      name: thisCampaign.name,
      signers: updatedList,
    };
    console.log(doc);
    alert('check console for doc');
    let response = await Client.createOrReplace(doc).catch((err) => {
      alert('Oh no, the update failed: ', err.message);
      return;
    });
    console.log(response._updatedAt);
    alert('check console for response');
  };

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
          <Form onSubmit={pledgeMe}>
            <Form.Group controlId="pledgeName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="pledgeEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type="text"
                placeholder="Ingrese su nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="pledgeEmail">
              <Form.Label>Dirección de correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su dirección de correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
