import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import SectionWrapper from '@/components/layout/SectionWrapper'
import PageWrapper from '@/components/layout/PageWrapper'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jérôme Haas |  Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>

        <SectionWrapper>
            
        </SectionWrapper>

        <SectionWrapper>
          section 1
        </SectionWrapper>



      </PageWrapper>


    </>
  )
}
