import React from 'react';
import styles from '@/styles/Reference.module.scss';

interface Props {
  filename: string;
  path: string;
}

const Reference: React.FunctionComponent<Props> = ({ filename, path }) => {

  return (

    < a href={path} className={styles.wrapper} download >
      <div className={styles.upper}>
        <img src="/images/reference.svg" alt="" width="104" height="142" />
      </div>
      <div className={styles.lower}>
        <p>{filename}</p>
      </div>
    </a >
  );

}

export default Reference;