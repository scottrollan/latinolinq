import React from 'react';
import Navbar from '../../components/NavBar';
import { Button } from 'react-bootstrap';
import styles from './Admin.module.scss';

const Admin = () => {
  return (
    <div className={styles.admin}>
      <Navbar />
      <Button
        variant="secondary"
        className={styles.adminButton}
        href="https://angry-swirles-752fba.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go To Admin Area
      </Button>
    </div>
  );
};

export default Admin;
