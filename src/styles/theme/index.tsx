import React, { useMemo } from 'react';
import { CssBaseline, ThemeOptions } from '@mui/material';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
  useTheme,
} from '@mui/material/styles';

import typography from './typography';
import componentsOverride from './overrides';

interface ThemeConfigProps {
  children: React.ReactNode;
}

const ThemeConfig = ({ children }: ThemeConfigProps) => {
  const theme = useTheme();

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      ...theme,
      typography,
    }),
    []
  );

  const customedTheme = createTheme(themeOptions);
  customedTheme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
