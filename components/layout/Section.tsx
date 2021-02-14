import React from 'react';
import styles from '@/styles/Section.module.scss';

interface Props {
  children: React.ReactNode
}

const Section: React.FunctionComponent<Props> = ({ children, id }) => {


  return (
    <div className={styles.section} id={id}>
      {children}
    </div>
  );

}

export default Section;