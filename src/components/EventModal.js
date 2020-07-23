import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './EventModal.module.scss';

const EventModal = ({
  title,
  description,
  date,
  link1,
  link1D,
  link2,
  link2D,
  src,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button className={styles.modalButton} onClick={handleShow}>
        More...
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{date}</p>
          <img src={src} alt="" className={styles.mImage} />
          <p>{description}</p>
        </Modal.Body>

        <Modal.Footer className={styles.mFooter}>
          <div>
            <span
              className={styles.footerNotes}
              style={{ display: !link1D ? 'none' : 'inherit' }}
            >
              {link1D}.
              <span style={{ display: !link1 ? 'none' : 'inherit' }}>
                Find out more <a href={link1}>&nbsp;here.</a>
              </span>
            </span>
            <div
              style={{
                display: !link2D ? 'none' : 'inherit',
                height: '1px',
                borderTop: '1px green solid',
                margin: '3px 0',
              }}
            ></div>
            <span
              className={styles.footerNotes}
              style={{
                display: !link2D ? 'none' : 'inherit',
              }}
            >
              {link2D}
              <span style={{ display: !link2 ? 'none' : 'inherit' }}>
                {' '}
                Find out more <a href={link2}>&nbsp;here.</a>
              </span>
            </span>
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default EventModal;
