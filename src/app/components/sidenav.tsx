'use client'

import { SideNavigation } from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';

const SideNav = () => {

  return (
    <SideNavigation
      header={{
        href: '/',
        text: 'Home',
      }}
      items={
        [
          { type: 'link', text: `Blog`, href: `/blog` },
          { type: 'link', text: `About`, href: `/about` },
        ]}
    />
  );
};

export default SideNav;


