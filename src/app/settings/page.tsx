'use client'

import '@cloudscape-design/global-styles/index.css';
import { type ReactElement } from 'react';
import Preferences from '../components/preferences';
import SitePage from '../components/sitepage';

export default function Settings(): ReactElement {

  return (
    <SitePage
      header='Preferences'
      content={<Preferences />}
    />
  )
}
