import React from 'react';
import styles from '@/styles/DesktopNav.module.scss';

interface Props { }

const DesktopNav: React.FunctionComponent<Props> = () => {


  return (
    <nav>
      <div id={styles.wrapper}>NAV</div>
    </nav>
  );

}

export default DesktopNav;