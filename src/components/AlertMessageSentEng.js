import React from 'react';
import styles from './AlertMessageSent.module.scss';

const AlertMessageSent = ({ message }) => {
  return (
    <div id="alertMessageSent" className={styles.alertDiv}>
      <div className={[`${styles.alertMessageSent} ${styles.fadeIn}`]}>
        <i className="far fa-paper-plane"></i> {message}
        <div>Thank you!</div>
      </div>
    </div>
  );
};

export default AlertMessageSent;
