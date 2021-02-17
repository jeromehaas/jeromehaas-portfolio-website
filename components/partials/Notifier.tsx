import React from 'react';
import styles from '@/styles/Notifier.module.scss';

interface Props {
  notifierStatus: string;
  notifierContent: string;
}

const Notifier: React.FunctionComponent<Props> = ({ notifierStatus, notifierContent }) => {


  return (
    <>
      <div id={styles.wrapper} className={notifierStatus === 'active' ? styles.active : null}>
        <p id={styles.messageText}>{notifierContent}</p>
      </div>
    </>
  );

}

export default Notifier;