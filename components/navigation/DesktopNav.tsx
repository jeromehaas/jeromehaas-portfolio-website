import React from 'react';
import styles from '@/styles/DesktopNav.module.scss';


interface Props { }

const DesktopNav: React.FunctionComponent<Props> = () => {


  return (
    <nav id={styles.wrapper}>
      <p>NAV</p>
    </nav>
  );

}

export default DesktopNav;