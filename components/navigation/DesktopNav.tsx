import React from 'react';
import styles from '@/styles/DesktopNav.module.scss';
import { ScrollToHOC, ScrollArea } from "react-scroll-to";
import Link from 'next/link';

interface Props { }

const DesktopNav: React.FunctionComponent<Props> = () => {


  return (
    <nav id={styles.wrapper}>
      <div className={styles.pageLinks}>
        <Link href="/#start"><a><img src="/images/start.svg" alt="" /></a></Link>
        <Link href="/#skills"><a><img src="/images/skills.svg" alt="" /></a></Link>
        <Link href="/#work"><a><img src="/images/work.svg" alt="" /></a></Link>
        <Link href="/#career"><a><img src="/images/career.svg" alt="" /></a></Link>
        <Link href="/#tools"><a><img src="/images/tools.svg" alt="" /></a></Link>
        <Link href="/#contact"><a><img src="/images/contact.svg" alt="" /></a></Link>
        <Link href="/#references"><a><img src="/images/references.svg" alt="" /></a></Link>
      </div>
      <div className={styles.socialMediaLinks}>
        <Link href="https://www.github.com/jeromehaas"><a target="_blank"><img src="/images/github.svg" alt="" /></a></Link>
        <Link href="https://www.instagram.com/_jeromehaas/"><a target="_blank"><img src="/images/instagram.svg" alt="" /></a></Link>
        <Link href="https://www.linkedin.com/in/jeromehaas/"><a target="_blank"><img src="/images/linkedin.svg" alt="" /></a></Link>
        <Link href="https://www.youtube.com/channel/UCkuE7p-P2S2QPWsdzDzSxhQ"><a target="_blank"><img src="/images/youtube.svg" alt="" /></a></Link>
      </div>
    </nav>
  );

}

export default DesktopNav;