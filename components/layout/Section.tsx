import React from 'react';
import styles from '@/styles/Section.module.scss';

interface Props { }

const Section: React.FunctionComponent<Props> = () => {


  return (
    <div className={styles.section}>
      <p>SECTION</p>
    </div>
  );

}

export default Section;