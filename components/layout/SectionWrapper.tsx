import React from 'react';
import styles from '@/styles/SectionWrapper.module.scss';

interface Props { }

const SectionWrapper: React.FunctionComponent<Props> = () => {


  return (
    <div className={styles.wrapper}>
      <p>hello</p>
    </div>
  );

}

export default SectionWrapper;