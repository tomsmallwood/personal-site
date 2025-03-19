// components/BuyMeACoffeeButton.tsx

import { Button } from '@cloudscape-design/components';
import React from 'react';

const BuyMeACoffeeButton: React.FunctionComponent = () => {
  return (
    <Button
      href='https://buymeacoffee.com/tomsmallwood'
      variant='link'
      target="_blank" external>
      Buy Me a Coffee
    </Button>
  );
};

export default BuyMeACoffeeButton;
