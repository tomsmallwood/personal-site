'use client'

import { Box, Header, TextContent } from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';
import Image from 'next/image';
import SitePage from '../components/sitepage';

export default function About() {

  return (
    <SitePage
      header='About me'
      content={
        <Box>
          <Image src={"./avatar.svg"} alt="avatar" width={50} height={50} />
          <TextContent>
            <Header variant="h3">Education</Header>
            <hr />
            <br />
            <ul>
              <li>Computer Science BSc, University of Bath (UK) : 2014-2018 </li>
            </ul>
            <br />
            <Header variant="h3">Experience</Header>
            <hr />
            <br />
            <ul>
              <li>Cloud Engineer : 2018+ </li>
            </ul>
          </TextContent>
          <br />
        </Box>
      }
    />
  );
}
