'use client'

import '@cloudscape-design/global-styles/index.css';
import { type ReactElement } from 'react';
import SitePage from './components/sitepage';
import Home from './home/page';

export default function Main(): ReactElement {

  return (
    <SitePage
      header='Personal Site'
      content={<Home />}
    />
  )
}
