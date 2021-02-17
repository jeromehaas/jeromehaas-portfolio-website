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


const websites = [
  {
    link: 'https://hellergrafik.ch',
    name: 'hellergrafik.ch',
    date: '09.2020'
  },
  {
    link: 'https://waterisahumanright.ch',
    name: 'waterisahumanright',
    date: '02.2020'
  },
  {
    link: 'https://kreuz-abtwil.ch',
    name: 'kreut-abtwil.ch',
    date: '06.2019' }, { link: 'https://pomodoro-counter.ch', name: 'pomodoro-counter.ch', date: '12.2019'
      },
  {
    link: 'https://decom.ch',
    name: 'decom.ch',
    date: '06.2018'
  },
];

const npmPackages = [
  {
    link: 'https://www.npmjs.com/package/github-cube',
    name: 'github-cube',
    date: '09.2020'
  },
];

const codepens= [
  {
    link: 'https://www.npmjs.com/package/github-cube',
    name: 'github-cube',
    date: '09.2020',
  },
];

const jobs = [
  {
    title: 'Codeworks Bootcamp',
    metaData: 'Codeworks | Spain, Barcelona',
    duration: 'October 2020 - Today',
    description: 'Codeworks is an immersive coding bootcamp focusing on JavaScript and web development. In 12 weeks of full-time training and over 1000 hours of coding and three projects, I deepened my knowledge in JavaScript, React, TypeScript, NodeJS, Express and many other technologies and frameworks.'
  },
  {
    title: 'Frontend Developer',
    metaData: 'Arcmedia AG | Switzerland, Lucerne',
    duration: 'December 2018 - October 2020',
    description: 'Arcmedia is a web agency with a focus on e-commerce and email marketing. During almost two years I worked as a frontend developer in the email marketing team and was responsible for developing forms with HTML, CSS and JavaScript for well-known clients. On top of that, I developed professional HTML email templates for our clients. I was also responsible for our IT infrastructure as a system administrator, managing all accounts and hardware for the company.'
  },
  {
    title: 'Self Study Web Development',
    metaData: 'Arcmedia AG | Switzerland, Lucerne',
    duration: 'DDecember 2017 - December 2018',
    description: 'During my travels through Europe and South-East-Asia I decided to become a web developer. I took some time off and learned about HTML, CSS and JavaScript and had my first experience with InDesign, Illustrator, Photoshop and After Effects. During this time I worked as a receptionist at Roche to have a stable income.'
  },
  {
    title: 'Backpacking',
    metaData: 'Europe and Southeast Asia',
    duration: 'April 2017 - December 2017',
    description: 'After an intense period of service in Kosovo, I took time off to travel Europe and Southeast Asia to process all the impressions and gather new ones. During this time I backpacked in Portugal, Spain, Italy, Switzerland, France, La Reunion, Sri Lanka, Thailand, Vietnam, the Philippines, Singapore and Indonesia.'
  },
  {
    title: 'Transmission Specialist, Seputy IT Officer, Military Assistant',
    metaData: 'Swissint | Kosovo, Pristina',
    duration: 'June 2015 - April 2017',
    description: 'International peace support is one of the three tasks of the Swiss Armed Forces laid down in the federal constitution and by the federal law on the swiss armed forces. Swissint is responsible for the conduct of peace support operations. After an intensive 3-month training from Swissint, I served two years in the KFOR forces. During this time, I worked in the tactical operations center and was responsible for the coordination and authorization of our mobile units outside the protected camp. In addition, as a military assistant I was responsible for coordinating the agenda of our national contingent commander and planning and executing relocations, as well as providing personal protection.'
  },
  {
    title: 'Ventilation System Builder',
    metaData: 'Jakob Haas AG | Switzerland, Merenschwand',
    duration: 'June 2014 - June 2015',
    description: 'In our family business, I took responsibility for various areas. I was responsible for procuring materials and controlling their delivery, providing and maintaining IT, and installing simple ventilation systems.'
  },
  {
    title: 'Salesman',
    metaData: 'Magazine zum Globus AG | Switzerland, Lucerne',
    duration: 'August 2013 - June 2014',
    description: 'At Globus, I worked as a salesman and was responsible for the business area. I advised customers interested in buying suits, ties, shoes and other clothing.'
  },
  {
    title: 'Infantryman',
    metaData: 'Swiss Army | Switzerland, Yverdon les baines',
    duration: 'March 2013 - August 2013',
    description: 'I fulfilled the obligation of my country and completed a training as an infantryman and was trained in urban warfare, navigation and radio engineering.'
  },
  {
    title: 'Salesman Apprenticeship',
    metaData: 'Magazine to Globus AG | Switzerland, Lucerne',
    duration: 'August 2009 - March 2013',
    description: 'After school, I started my career as a salesman at Globus. At this time I was very interested in observing body language and communication. During the training I learned how to communicate, how to mirror body language and the basics of good manners.'
  },
];

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

export default function Home() {

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
  const [notifierContent, setNotifierContent] = useState('hello world');
  
  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      console.log('submit');
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
        <title>Jérôme Haas |  Front-End Developer</title>
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
                <h1>Jérôme Haas</h1>
                <h3 data-text="Front-End Developer" >Front-End Developer</h3>
                <p>
                  Hi, I'm Jérôme - a Frontend Engineer experienced in JavaScript technologies. Experienced in React, TypeScript, MongoDB and SCSS and with some knowledge in Express, Koa and Angular.
                  <br />
                  I am a passionate developer with a quick perception. I prefer to work with frontend technologies in small teams. I like the challenge and there is nothing better for me than developing creative and solid solutions for the web.
                  <br />
                  In my spare time you can find me on running tracks, abroad on bagpacking trips or in front of my favorite IDE. 
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id={"skills"}>
          <h2>Skills</h2>
          <Skill name={"JavaScript"} value={85} />
          <Skill name={"Sass"} value={80} />
          <Skill name={"Linux"} value={75} />
          <Skill name={"React"} value={60} />
          <Skill name={"TypeScript"} value={35} />
          <Skill name={"NodeJS"} value={30} />
          <Skill name={"MongoDB"} value={25} />
          <Skill name={"PostGres"} value={20} />
        </Section>

        <Section id={"work"}>
          <h2>Work</h2>
          <Dropdown name={"Websites"}  items={websites} status={websiteDropdownStatus} open={() => setWebsiteDropdownStatus(!websiteDropdownStatus)}/>
          <Dropdown name={"NPM Packages"} items={npmPackages} status={npmPackageDropdownStatus} open={() => setNpmPackageDropdownStatus(!npmPackageDropdownStatus)} />
          {/* <Dropdown name={"Codepens"} items={codepens} status={codepenDropdownStatus} open={() => setCodepenDropdownStatus(!codepenDropdownStatus)} /> */}
          </Section>

        <Section id={"career"}>
          <h2>Career</h2>
          {jobs.map((job, index) =>  <CareerPoint jobDetails={job} key={index} /> )}
        </Section>

        <Section id={"tools"}>
          <h2>Tools</h2>
          <div className={styles.boxContainer}>
          {tools.map((tool, index) =>  <Box toolDetails={tool} key={index} /> )}
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
          <Reference filename={'resume.pdf'} path={'/references/resume.pdf'} />
          <h3 data-text="Job Reference">Job Reference</h3>
          <Reference filename={'ref_arcmedia.pdf'} path={'/references/ref_arcmedia.pdf'} />
          <Reference filename={'ref_swissint.pdf'} path={'/references/ref_swissint.pdf'} />
          <h3 data-text="Front-End Developer"data-text="Certificates">Certificates</h3>
          <Reference filename={'cert_psp.pdf'} path={'/references/cert_psp.pdf'} />
        </Section>
        
      </PageLayout>
    </>
  )
}
