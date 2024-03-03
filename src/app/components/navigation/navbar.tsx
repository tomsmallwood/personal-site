'use client'

import { TopNavigation } from "@cloudscape-design/components";

const Navbar = () => {

  return (
    <TopNavigation identity={{
      href: "/",
      title: "Tom Smallwood",
    }}
      utilities={[
        {
          type: "button",
          text: "Github",
          href: "https://github.com/tomsmallwood",
          external: true,
          externalIconAriaLabel: "(opens in a new tab)"
        },
        {
          type: "button",
          iconName: "settings",
          ariaLabel: "settings",
          title: "Settings",
          href: "/settings",
        },
      ]}
    />
  );
};

export default Navbar;
