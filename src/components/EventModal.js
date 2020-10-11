import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import $ from 'jquery';
import MediaQuery from 'react-responsive';
import styles from './EventModal.module.scss';

const EventModal = ({
  title,
  subtitle,
  description,
  date,
  startTime,
  link1,
  link1D,
  link2,
  link2D,
  src,
  text,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    $('html').css('overflow-y', 'scroll');
  };
  const handleShow = (e) => {
    e.stopPropagation();
    setShow(true);
    $('html').css('overflow-y', 'hidden');
  };

  const shortTime = text.toString().slice(0, -3);
  return (
    <div className="eventModal">
      <MediaQuery minDeviceWidth={1224}>
        <Button
          className={styles.modalButton}
          onClick={handleShow}
          title={title}
        >
          {text}
        </Button>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <Button
          className={styles.mobileModalButton}
          onClick={handleShow}
          title={title}
        >
          {shortTime}
        </Button>
      </MediaQuery>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div>
            <p as="h5">{subtitle}</p>
            <p>
              {date} at {startTime}
            </p>
            <p>{description}</p>
          </div>
          <div className={styles.mImageDiv}>
            <img src={src} alt="" className={styles.mImage} />
          </div>
        </Modal.Body>

        <Modal.Footer className={styles.mFooter}>
          <div>
            <div
              className={styles.footerNotes}
              style={{ display: !link1D ? 'none' : 'inherit' }}
            >
              {link1D}.
              <span style={{ display: !link1 ? 'none' : 'inherit' }}>
                <a href={link1} target="_blank" rel="noopener noreferrer">
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginBottom: '10px' }}
                  ></i>
                </a>
              </span>
            </div>
            <div
              style={{
                display: !link2D ? 'none' : 'inherit',
                height: '1px',
                borderTop: '1px green solid',
              }}
            ></div>
            <div
              className={styles.footerNotes}
              style={{
                display: !link2D ? 'none' : 'inherit',
              }}
            >
              {link2D}
              <span
                style={{
                  display: !link2 ? 'none' : 'inherit',
                }}
              >
                <a href={link2} target="_blank" rel="noopener noreferrer">
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginBottom: '10px' }}
                  ></i>
                </a>
              </span>
            </div>
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EventModal;
