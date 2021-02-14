import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import SectionWrapper from '@/components/layout/SectionWrapper';
import PageWrapper from '@/components/layout/PageWrapper';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';


export default function Home() {
  return (
    <>
      <Head>
        <title>Jérôme Haas |  Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/EBGaramond/EBGaramond-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/EBGaramond/EBGaramond-Medium.ttf" as="font" crossOrigin="" />
      </Head>
      

      <PageLayout>

        <Section>
          <div id={styles.intro} className={styles.section}>
            <div id={styles.introWrapper} className={styles.sectionWrapper}>
              <img id={styles.portrait} src="/images/jeromehaas.png" alt="Jérôme Haas"/>
              <div className={styles.text}>
                <h1>Jérôme Haas</h1>
                <h3>Front-End Developer</h3>
                <p>I am a passionate webdeveloper. I wrote my first line of code in 2016. Since then I have been fascinated by web development and am constantly educating myself in this area with the medium to long term goal of becoming a fullstack web developer. So far I am self-taught in HTML, CSS, JavaScript and PHP and I like nothing better than developing websites and web applications. I prefer to focus on custom-made and intelligent solutions for small and medium sized companies. In my spare time you can find me on running tracks, abroad on bagpacking trips or in front of my favorite IDE. </p>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div id={styles.intro} className={styles.section}>
            <div id={styles.introWrapper} className={styles.sectionWrapper}>
              <img id={styles.portrait} src="/images/jeromehaas.png" alt="Jérôme Haas"/>
              <div className={styles.text}>
                <h1>Jérôme Haas</h1>
                <h3>Front-End Developer</h3>
                <p>I am a passionate webdeveloper. I wrote my first line of code in 2016. Since then I have been fascinated by web development and am constantly educating myself in this area with the medium to long term goal of becoming a fullstack web developer. So far I am self-taught in HTML, CSS, JavaScript and PHP and I like nothing better than developing websites and web applications. I prefer to focus on custom-made and intelligent solutions for small and medium sized companies. In my spare time you can find me on running tracks, abroad on bagpacking trips or in front of my favorite IDE. </p>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div id={styles.intro} className={styles.section}>
            <div id={styles.introWrapper} className={styles.sectionWrapper}>
              <img id={styles.portrait} src="/images/jeromehaas.png" alt="Jérôme Haas"/>
              <div className={styles.text}>
                <h1>Jérôme Haas</h1>
                <h3>Front-End Developer</h3>
                <p>I am a passionate webdeveloper. I wrote my first line of code in 2016. Since then I have been fascinated by web development and am constantly educating myself in this area with the medium to long term goal of becoming a fullstack web developer. So far I am self-taught in HTML, CSS, JavaScript and PHP and I like nothing better than developing websites and web applications. I prefer to focus on custom-made and intelligent solutions for small and medium sized companies. In my spare time you can find me on running tracks, abroad on bagpacking trips or in front of my favorite IDE. </p>
              </div>
            </div>
          </div>
        </Section>







      </PageLayout>
    </>
  )
}
