'use client'

import { Header, SpaceBetween, TextContent } from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';

const Home = () => {

  return (
    <SpaceBetween size="m">
      <Header variant="h2">Welcome!</Header>
      <TextContent>
        <br />
        <p>I aim to make regular contributions to my blog as well as adding more information about me.</p>
      </TextContent>
    </SpaceBetween >
  )
}

export default Home;