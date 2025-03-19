'use client'

import { AppLayout, Container, ContentLayout, Header, SpaceBetween } from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';
import { useState } from 'react';
import SideNav from './sidenav';

interface SitePageProps {
  header: string
  content: React.ReactNode
}

const SitePage: React.FunctionComponent<SitePageProps> = ({ header, content }) => {

  const [navigationOpen, setNavigationOpen] = useState(true);

  return (
    <AppLayout
      navigationOpen={navigationOpen}
      onNavigationChange={({ detail }) => setNavigationOpen(detail.open)}
      toolsHide={false}
      content={
        <SpaceBetween size="l">
          <ContentLayout
            header={<Header variant="h1">
              {header}
            </Header>}
          >
            <Container>{content}</Container>
          </ContentLayout>
        </SpaceBetween>
      }
      navigation={<SideNav />}
    />
  );
};

export default SitePage;




