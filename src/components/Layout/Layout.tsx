import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { LogoImage } from 'assets';
import { ROUTES } from 'core';
import './layout.scss';

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  const navigate = useNavigate();

  const onClickDashboard = useCallback(() => {
    navigate(ROUTES.DASHBOARD);
  }, []);

  return (
    <div className="layout">
      <div className="layout-menu">
        <img src={LogoImage} alt="LogoImage" className="layout-menu-logo" />
        <button onClick={onClickDashboard}>Go to Dashboard</button>
      </div>
      <div className="layout-content">{children ?? <Outlet />}</div>
    </div>
  );
};
