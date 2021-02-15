import React from 'react';
import styles from '@/styles/Box.module.scss';

interface Props {
  toolDetails: string;
}

const Box: React.FunctionComponent<Props> = ({ toolDetails }) => {

  return (
    <div className={styles.wrapper}>
      <p>{toolDetails}</p>
    </div>
  );

}

export default Box;