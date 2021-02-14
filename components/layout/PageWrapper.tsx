import React from 'react';
import styles from '@/styles/PageWrapper.module.scss';

interface Props {
  children: React.ReactNode;
}

const PageWrapper: React.FunctionComponent<Props> = ({ children }) => {


  return (
    <>
      <div id={styles.wrapper}>
        {children}
      </div>
    </>
  );

}

export default PageWrapper;