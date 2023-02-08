import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from 'app/pages/home';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);
};

export default Router;
