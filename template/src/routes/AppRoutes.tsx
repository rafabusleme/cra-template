import React from 'react';

import { Route, Routes } from 'react-router-dom';

import InitialPage from '../pages/InitialPage/InitialPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='*' element={<InitialPage />} />
    </Routes>
  );
};

export default AppRoutes;
