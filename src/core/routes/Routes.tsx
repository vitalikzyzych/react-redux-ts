import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import { ROUTES } from 'core';

import { UsersScreen, DashboardScreen } from 'features';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.DASHBOARD} element={<DashboardScreen />} />
      <Route element={<Layout />}>
        <Route path={ROUTES.USERS} element={<UsersScreen />} />
      </Route>
      <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} />} />
    </Routes>
  );
};

export default AppRoutes;
