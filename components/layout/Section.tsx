import React from 'react';
import styles from '@/styles/Section.module.scss';

interface Props {
  children: React.ReactNode
}

const Section: React.FunctionComponent<Props> = ({ children }) => {


  return (
    <div className={styles.section}>
      {children}
    </div>
  );

}

export default Section;