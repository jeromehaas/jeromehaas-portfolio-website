import React from 'react';
import styles from '@/styles/DesktopNav.module.scss';
import { ScrollToHOC, ScrollArea } from "react-scroll-to";
import Link from 'next/link';

interface Props { }

const DesktopNav: React.FunctionComponent<Props> = () => {


  return (
    <nav id={styles.wrapper}>
      <div className={styles.pageLinks}>
        <Link href="/#start"><a><img src="/icons/navigation/start.svg" alt="" /></a></Link>
        <Link href="/#skills"><a><img src="/icons/navigation/skills.svg" alt="" /></a></Link>
        <Link href="/#work"><a><img src="/icons/navigation/work.svg" alt="" /></a></Link>
        <Link href="/#career"><a><img src="/icons/navigation/career.svg" alt="" /></a></Link>
        <Link href="/#tools"><a><img src="/icons/navigation/tools.svg" alt="" /></a></Link>
        <Link href="/#contact"><a><img src="/icons/navigation/contact.svg" alt="" /></a></Link>
        <Link href="/#references"><a><img src="/icons/navigation/references.svg" alt="" /></a></Link>
      </div>
      <div className={styles.socialMediaLinks}>
        <Link href="/#work"><a><img src="/icons/navigation/github.svg" alt="" /></a></Link>
        <Link href="/#work"><a><img src="/icons/navigation/instagram.svg" alt="" /></a></Link>
        <Link href="/#work"><a><img src="/icons/navigation/linkedin.svg" alt="" /></a></Link>
        <Link href="/#work"><a><img src="/icons/navigation/youtube.svg" alt="" /></a></Link>
      </div>
    </nav>
  );

}

export default DesktopNav;