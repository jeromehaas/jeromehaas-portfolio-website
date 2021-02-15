import React from 'react';
import styles from '@/styles/CareerPoint.module.scss';

interface Props {
  jobDetails: any;
}

const CareerPoint: React.FunctionComponent<Props> = ({ jobDetails }) => {

  return (
    <div className={styles.wrapper}>
      <h3>{jobDetails.title}</h3>
      <p>{jobDetails.metaData}</p>
      <p>{jobDetails.duration}</p>
      <p>{jobDetails.description}</p>
    </div>
  );

}

export default CareerPoint;