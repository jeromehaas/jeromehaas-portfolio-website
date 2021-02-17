import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionWrapper from '@/components/layout/SectionWrapper';
import DesktopNav from '@/components/navigation/DesktopNav';
import Notifier from '@/components/partials/Notifier';

interface Props {
  children: React.ReactNode
}

const PageLayout: React.FunctionComponent<Props> = ({ children }) => {


  return (

    <PageWrapper>
      <Notifier />
      <DesktopNav />
      <SectionWrapper>
        {children}
      </SectionWrapper>

    </PageWrapper>

  );

}

export default PageLayout;