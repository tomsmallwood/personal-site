'use client'

import { AppLayout } from '@cloudscape-design/components';

import '@cloudscape-design/global-styles/index.css';
import { type ReactElement } from 'react';
import Home from './components/home/home';

export default function Main(): ReactElement {

  return (
    <AppLayout
      navigationHide={true}
      navigationOpen={false}
      toolsHide={true}
      toolsOpen={false}
      content={<Home />}
    />
  )
}
