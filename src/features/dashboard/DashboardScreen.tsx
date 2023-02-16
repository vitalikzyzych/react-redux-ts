import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'core';
import { LogoImage } from 'assets';
import './dashboardScreen.scss';

const DashboardScreen: React.FC = () => {
  const navigate = useNavigate();
  const onClickDashboard = useCallback(() => {
    navigate(ROUTES.USERS);
  }, []);

  return (
    <header className="dashboardScreen-header">
      <img src={LogoImage} className="dashboardScreen-logo" alt="logo" />
      <button onClick={onClickDashboard}>Users</button>
    </header>
  );
};

export default DashboardScreen;
