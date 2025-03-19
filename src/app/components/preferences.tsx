'use client'

import { useTheme } from '@/app/context/theme';
import { SpaceBetween, Toggle } from '@cloudscape-design/components';
import { Mode } from '@cloudscape-design/global-styles';
import '@cloudscape-design/global-styles/index.css';

const Preferences = () => {

  const { toggleTheme, mode } = useTheme();
  const darkMode = mode === Mode.Dark

  return (
    <SpaceBetween size='l'>
      <Toggle checked={darkMode} onChange={toggleTheme}>
        Dark Mode
      </Toggle>
    </SpaceBetween>
  );
};

export default Preferences;
