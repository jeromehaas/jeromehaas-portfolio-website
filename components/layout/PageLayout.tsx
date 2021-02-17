import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionWrapper from '@/components/layout/SectionWrapper';
import DesktopNav from '@/components/navigation/DesktopNav';
import Notifier from '@/components/partials/Notifier';

interface Props {
  children: React.ReactNode;
  notifierStatus: string;
  notifierContent: string;
}

const PageLayout: React.FunctionComponent<Props> = ({ children, notifierStatus, notifierContent }) => {


  return (

    <PageWrapper>
      <Notifier notifierStatus={notifierStatus} notifierContent={notifierContent} />
      <DesktopNav />
      <SectionWrapper>
        {children}
      </SectionWrapper>

    </PageWrapper>

  );

}

export default PageLayout;