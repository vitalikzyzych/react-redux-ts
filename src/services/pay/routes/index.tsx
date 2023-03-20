import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardScreen } from '../features';

export const ROUTES = {
  DASHBOARD: '/pay',
};

const SurveyRoutes: () => JSX.Element = () => {
  return (
    <Routes>
      <Route path={ROUTES.DASHBOARD} element={<DashboardScreen />} />
      <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} />} />
    </Routes>
  );
};

export default SurveyRoutes;
