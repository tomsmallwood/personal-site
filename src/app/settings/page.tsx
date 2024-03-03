'use client'

import { AppLayout } from '@cloudscape-design/components';
import { type ReactElement } from 'react';
import Preferences from '../components/preferences/preferences';

import '@cloudscape-design/global-styles/index.css';


export default function Settings(): ReactElement {

  return (
    <AppLayout
      navigationHide={true}
      navigationOpen={false}
      toolsHide={true}
      toolsOpen={false}
      content={<Preferences />}
    />
  )
}
