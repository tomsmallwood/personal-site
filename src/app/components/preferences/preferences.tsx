'use client'

import { Container, ContentLayout, Header, SpaceBetween, Toggle } from '@cloudscape-design/components';
import { Mode, applyMode } from '@cloudscape-design/global-styles';

import '@cloudscape-design/global-styles/index.css';
import { useState } from 'react';

const Preferences = () => {
  const [dark, setDark] = useState(false);

  return (
    <SpaceBetween size="m">
      <ContentLayout
        header={
          <Header variant="h1">
            Preferences
          </Header>
        }
      >
        <Container>
          <SpaceBetween size='l'>
            <Toggle checked={dark} onChange={() => {
              // apply a color mode
              if (dark) {
                applyMode(Mode.Light);
              } else {
                applyMode(Mode.Dark);
              }
              setDark(!dark)
            }}>
              Dark Mode
            </Toggle>
          </SpaceBetween>
        </Container>
      </ ContentLayout>
    </SpaceBetween>
  );
};

export default Preferences;
