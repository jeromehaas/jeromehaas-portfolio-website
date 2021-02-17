import React from 'react';
import styles from '@/styles/Notifier.module.scss';

interface Props { }

const Notifier: React.FunctionComponent<Props> = () => {


  return (
    <>
      <div id={styles.wrapper}>
        <p id={styles.messageText}>Hello World</p>
      </div>
    </>
  );

}

export default Notifier;