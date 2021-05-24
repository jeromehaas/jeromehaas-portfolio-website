import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import SectionWrapper from '@/components/layout/SectionWrapper';
import PageWrapper from '@/components/layout/PageWrapper';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import Link from 'next/link';
import Skill from '@/components/partials/Skill';
import Dropdown from '@/components/partials/Dropdown';
import CareerPoint from '@/components/partials/CareerPoint';
import Box from '@/components/partials/Box';
import InputField from '@/components/partials/InputField';
import Reference from '@/components/partials/Reference';
import { sendMail } from '@/services/email.js';
import { gql } from "@apollo/client";
import client from "../apollo-client";

const tools = [
  'VS Code',
  'FileZilla', 
  'JIRA', 
  'Confluence', 
  'LastPass',
  'Dashlane',
  'Office 365',
  'Linux', 
  'Windows', 
  'MacoS',
  'CyberDuck',
  'Figma', 
  'Illustrator', 
  'Slack', 
  'Postman',
  'MAMP',
  'Monday', 
  'Typora', 
  'Atom', 
  'oh-my-zsh', 
  'Vim',
];

export default function Home({ data }) {

  console.log(data);

  const [websiteDropdownStatus, setWebsiteDropdownStatus] = useState(false);
  const [npmPackageDropdownStatus, setNpmPackageDropdownStatus] = useState(false);
  const [codepenDropdownStatus, setCodepenDropdownStatus] = useState(false);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFirstname = (event) => { setFirstname(event.target.value) } 
  const handleLastname = (event) => { setLastname(event.target.value) } 
  const handleEmail = (event) => { setEmail(event.target.value) } 
  const handleMessage = (event) => { setMessage(event.target.value) } 

  const [notifierStatus, setNotifierStatus] = useState('hidden');
  const [notifierContent, setNotifierContent] = useState('');

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      sendMail(firstname, lastname, email, message)
      setFirstname('');
      setLastname('');
      setEmail('');
      setMessage('');
      setNotifierContent('Your message has been sent successfully!')
      setNotifierStatus('active');
      setTimeout(() => {
        setNotifierStatus('hidden');
      }, 3000);
    } catch (error) {
      setNotifierContent('Sorry, something went wrong... Please contact me via email!')
      setNotifierStatus('active');
      setTimeout(() => {
        setNotifierStatus('hidden');
      }, 3000);
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>{data.start[0].fullName} | {data.start[0].jobTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/roboto/Roboto-Light.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/roboto/Roboto-Bold.ttf" as="font" crossOrigin="" />
      </Head>
      
      <PageLayout notifierStatus={notifierStatus} notifierContent={notifierContent}>
        <Section id={"start"}>
          <div id={styles.start} className={styles.section}>
            <div id={styles.startWrapper} className={styles.sectionWrapper}>
              <img id={styles.portrait} src="/images/jeromehaas.png" alt="Jérôme Haas"/>
              <div className={styles.text}>
                <h1>{data.start[0].fullName}</h1>
                <h3 data-text="Front-End Developer">{data.start[0].jobTitle}</h3>
                <p>
                  {data.start[0].introText}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id={"skills"}>
          <h2>Skills</h2>
          {data.skills.map((skill) => (
            <Skill name={skill.technology} value={skill.skillLevel} key={skill.technology} />
          ))}
        </Section>

        <Section id={"work"}>
          <h2>Work</h2>
            <Dropdown name={"Websites"}  items={data.work.websites} status={websiteDropdownStatus} open={() => setWebsiteDropdownStatus(!websiteDropdownStatus)}/>
            <Dropdown name={"NPM Packages"} items={data.work.npmPackages} status={npmPackageDropdownStatus} open={() => setNpmPackageDropdownStatus(!npmPackageDropdownStatus)} />
            <Dropdown name={"Codepens"} items={data.work.codepens} status={codepenDropdownStatus} open={() => setCodepenDropdownStatus(!codepenDropdownStatus)} />
          </Section>

        <Section id={"career"}>
          <h2>Career</h2>
          {data.career.map((job, index) =>  <CareerPoint jobDetails={job} key={index} /> )}
        </Section>

        <Section id={"tools"}>
          <h2>Tools</h2>
          <div className={styles.boxContainer}>
          {data.tools.map((tool, index) =>  <Box toolDetails={tool} key={index} /> )}
          </div>
        </Section>

        <Section id={"contact"}>
        <div id={styles.contact} className={styles.section}>
            <div id={styles.contactWrapper} className={styles.sectionWrapper}>
              <h2>Contact</h2>
              <form onSubmit={handleSubmit}>
                <InputField type={'text'} label={'Firstname'} width={'calc(50% - 20px)'} value={firstname} onChangeAction={handleFirstname}/>
                <InputField type={'text'} label={'Lastname'} width={'calc(50% - 20px)'} value={lastname} onChangeAction={handleLastname}/>
                <InputField type={'text'} label={'Email'}  width={'100%'} value={email} onChangeAction={handleEmail}/>
                <InputField type={'textarea'} label={'Message'}  width={'100%'} value={message} onChangeAction={handleMessage}/>
                <InputField type={'submit'} label={'Send'}  width={'100%'}/>
              </form>
            </div>
          </div>
        </Section>

        <Section id={"references"}>
          <h2>References</h2>
          <h3 data-text="Resume">Resume</h3>
          <Reference filename={'resume_de.pdf'} path={'/references/resume_de.pdf'} />
          <Reference filename={'resume_en.pdf'} path={'/references/resume_en.pdf'} />
          <h3 data-text="Job Reference">Job Reference</h3>
          <Reference filename={'ref_arcmedia.pdf'} path={'/references/ref_arcmedia.pdf'} />
          <Reference filename={'ref_swissint.pdf'} path={'/references/ref_swissint.pdf'} />
          <h3 data-text="Front-End Developer"data-text="Certificates">Certificates</h3>
          <Reference filename={'cert_fullstack.pdf'} path={'/references/cert_fullstack.pdf'} />
          <Reference filename={'cert_psp.pdf'} path={'/references/cert_psp.pdf'} />
        </Section>
        
      </PageLayout>
    </>
  )
}

export async function getStaticProps() {
  const work = await client.query({
    query: gql`
      {
        entries (section: "work") {
          title
          ...on work_work_Entry {
            category,
            displayName, 
            targetUrl, 
            dateSinceOnline
          }
        }
      }
    `
  });
  const references = await client.query({
    query: gql`
      {
        entries (section: "references") {
          title
        }
      }
    `
  });
  const skills = await client.query({
    query: gql`
      {
        entries (section: "skill", orderBy: "skillLevel DESC") {
          ...on skill_skill_Entry {
            technology,
            skillLevel
          }
        }
      }
    `
  });
  const career = await client.query({
    query: gql`
      {
        entries (section: "career", orderBy: "durationStart DESC") {
          title
          ...on career_career_Entry {
            position, 
            companyName, 
            location,
            durationStart, 
            durationEnd, 
            description
          }
        }
      }
    `
  });
  const tools = await client.query({
    query: gql`
      {
        entries (section: "tools") {
          title
          ...on tools_tools_Entry {
            toolName, 
            targetLink
          }
        }
      }
    `
  });
  const start = await client.query({
    query: gql`
      {
        entries (section: "start") {
          title
          ...on start_start_Entry {
            fullName,
            jobTitle,
            introText
          }
        }
      }
    `
  });
  const socialMedia = await client.query({
    query: gql`
      {
        entries (section: "socialMedia") {
          title
          ...on socialMedia_socialMedia_Entry {
            githubLink,
            youtubeLink,
            linkedinLink,
            instagramLink
          }
        }
      }
    `
  });

  return {
    props: {
     data: {
        start: start.data.entries,
        skills: skills.data.entries,
        work: {
          websites: work.data.entries.filter(item => { return item.category === 'website'}),
          codepens: work.data.entries.filter(item => { return item.category === 'codepen'}),
          npmPackages: work.data.entries.filter(item => { return item.category === 'npmPackage'})
        },
        career: career.data.entries,
        tools: tools.data.entries,
        references: references.data.entries,
        socialMedia: socialMedia.data.entries,
      }
    }
  }
}