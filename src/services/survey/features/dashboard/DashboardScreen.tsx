import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

import { ROUTES } from '../../routes';

const DashboardScreen: React.FC = () => {
  const navigate = useNavigate();
  const onClickDashboard = useCallback(() => {
    navigate(ROUTES.DASHBOARD);
  }, []);

  return (
    <header className="dashboardScreen-header">
      <h1>Survey dashboard</h1>
      <Button onClick={onClickDashboard}>Users</Button>
    </header>
  );
};

export default DashboardScreen;
