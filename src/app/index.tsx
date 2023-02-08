import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from 'styles/theme/globalStyles';
import ThemeConfig from 'styles/theme';

import Router from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeConfig>
        <Router />
        <GlobalStyles />
      </ThemeConfig>
    </BrowserRouter>
  );
};

export default App;
