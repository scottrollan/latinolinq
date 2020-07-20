import React from 'react';
import styles from './AlertMessageSent.module.scss';

const AlertMessageSentEsp = () => {
  return (
    <div id="alertMessageSentEsp" className={styles.alertDiv}>
      <div className={[`${styles.alertMessageSent} ${styles.fadeIn}`]}>
        <i className="far fa-paper-plane"></i> ¡Mensaje enviado!
        <div>Gracis.</div>
      </div>
    </div>
  );
};

export default AlertMessageSentEsp;
