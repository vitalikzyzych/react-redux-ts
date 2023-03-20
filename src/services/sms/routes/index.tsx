import { Navigate, Route, Routes } from 'react-router-dom';
import { UsersScreen, DashboardScreen } from '../features';

export const ROUTES = {
  DASHBOARD: '/sms',
  USERS: '/sms/users',
};

const SMSRoutes: () => JSX.Element = () => {
  return (
    <Routes>
      <Route path={ROUTES.DASHBOARD} element={<DashboardScreen />} />
      <Route path={ROUTES.USERS} element={<UsersScreen />} />
      <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} />} />
    </Routes>
  );
};

export default SMSRoutes;
