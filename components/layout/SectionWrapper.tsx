import React from 'react';
import styles from '@/styles/SectionWrapper.module.scss';

interface Props {
  children: React.ReactNode
}

const SectionWrapper: React.FunctionComponent<Props> = ({ children }) => {

  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );

}

export default SectionWrapper;