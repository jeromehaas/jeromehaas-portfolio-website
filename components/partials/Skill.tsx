import React from 'react';
import styles from '@/styles/Skill.module.scss';

interface Props {
  value: number;
  name: string;
}

const Skill: React.FunctionComponent<Props> = ({ name, value }) => {


  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{name}</p>
      <div className={styles.progress}>
        <div className={styles.progressValue} style={{ width: value + '%' }} ></div>
      </div>
      <p className={styles.label}>{`${value}%`}</p>
    </div >
  );

}

export default Skill;