import React from 'react';
import styles from '@/styles/PageWrapper.module.scss';
import Head from "next/head";
import Link from "next/link";

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