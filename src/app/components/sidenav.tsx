'use client'

import { SideNavigation } from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const SideNav = () => {

  const [activeHref, setActiveHref] = useState(
    "/"
  );

  const { push } = useRouter()
  const pn = usePathname()

  useEffect(() => {
    setActiveHref(pn)
  }, [pn])

  return (
    <SideNavigation
      header={{
        href: '/',
        text: 'Home',
      }}
      activeHref={activeHref}
      onFollow={(event) => {
        event.preventDefault()
        setActiveHref(event.detail.href)
        push(event.detail.href)
      }}
      items={
        [
          {
            type: 'section-group', title: `Blog`, items:
              [
                { type: 'link', text: `1. Free static website`, href: `/blog/site` },
              ]
          },
          { type: 'divider' },
          { type: 'link', text: `About`, href: `/about` },
        ]}
    />
  );
};

export default SideNav;


