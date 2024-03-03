'use client'


import { Container, ContentLayout, Header, SpaceBetween } from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';

const Home = () => {

  return (
    <SpaceBetween size="m">
      <ContentLayout
        header={
          <Header variant="h1">
            Home
          </Header>
        }
      >
        <Container>
          <Header variant="h1">Hello World!</Header>
        </Container>
      </ ContentLayout>
    </SpaceBetween>
  )
}

export default Home;