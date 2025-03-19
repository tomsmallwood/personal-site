'use client'

import { TopNavigation } from "@cloudscape-design/components";

const Navbar = () => {

  return (
    <TopNavigation identity={{
      href: "/",
      title: "Tom Smallwood",
      logo: {
        src: "/avatar.svg",
        alt: "avatar"
      }
    }}
      utilities={
        [
          {
            type: "button",
            text: "Github",
            href: "https://github.com/tomsmallwood",
            external: true,
            externalIconAriaLabel: "(opens in a new tab)"
          },
          {
            type: "menu-dropdown",
            iconName: "settings",
            ariaLabel: "Preferences",
            title: "Settings",
            items: [
              {
                id: "personal-preferences",
                text: "Preferences",
                href: "/settings",
              }
            ]
          },
        ]}
    />
  );
};

export default Navbar;
