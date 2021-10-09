import React from 'react';
import styles from '@/styles/CareerPoint.module.scss';

interface Props {
  jobDetails: any;
}

const CareerPoint: React.FunctionComponent<Props> = ({ jobDetails }) => {

  return (
    <div className={styles.wrapper}>
      <h3 data-text={jobDetails.title}>{jobDetails.title}</h3>
      <p>{jobDetails.companyName}</p>
      <p>{jobDetails.location}</p>
      <p>{jobDetails.durationStart} - {jobDetails.durationEnd}</p>
      <p>{jobDetails.description}</p>
    </div>
  );

}

export default CareerPoint;