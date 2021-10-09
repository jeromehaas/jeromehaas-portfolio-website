import React from 'react';
import styles from '@/styles/Box.module.scss';

interface Props {
  toolDetails: any;
}

const Box: React.FunctionComponent<Props> = ({ toolDetails }) => {

  return (
    <div className={styles.wrapper}>
      <a className={styles.link} href={toolDetails.targetLink} target="_blank">
        <p>{toolDetails.toolName}</p>
      </a>
    </div>
  );

}

export default Box;