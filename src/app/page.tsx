'use client'

import { AppLayout, Button, Container, ContentLayout, Form, Header, Input, Link, SpaceBetween, Toggle } from '@cloudscape-design/components';
import { Mode, applyMode } from '@cloudscape-design/global-styles';

import '@cloudscape-design/global-styles/index.css';
import Image from 'next/image';
import { useState, type ReactElement } from 'react';


export default function Home(): ReactElement {
  const [value, setValue] = useState("");
  const [header, setHeader] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <AppLayout
      navigationOpen={false}
      toolsOpen={false}
      content={
        <ContentLayout
          header={
            <Header variant="h1" info={<Link variant="info">Info</Link>}>
              Page header
            </Header>
          }
        >
          <Container>
            <Header variant="h1">Hello World!</Header>

            <Header variant="h2">{header}</Header>
            <SpaceBetween size="s">
              <span>Start editing to see some magic happen</span>
              <Form>
                <Input
                  value={value}
                  type='text'
                  inputMode='decimal'
                  onChange={({ detail }) => setValue(detail.value)}
                />
                <Button variant="primary" onClick={() => setHeader(value)}>Submit</Button>
              </Form>
            </SpaceBetween>
            <SpaceBetween size='l'>
              <Toggle checked={checked} onChange={() => {
                // apply a color mode
                if (checked) {
                  applyMode(Mode.Light);
                } else {
                  applyMode(Mode.Dark);
                }
                setChecked(!checked)
              }}>
                Toggle
              </Toggle>
            </SpaceBetween>

            <Button>Hello!</Button>

            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={180}
              height={37}
              priority
            />
          </Container>
        </ ContentLayout>
      }
    />
  )
}
