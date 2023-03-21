import { Navigate, Route, Routes } from 'react-router-dom';
import {
  DashboardScreen,
  SenderIdsApprovalPage,
  SenderIdsCreatePage,
  SenderIdsHistoryPage,
  UsersScreen,
} from '../features';

export const ROUTES = {
  DASHBOARD: '/sms',
  USERS: '/sms/users',
  SENDER_IDS_NEW: '/sms/sender-ids-new',
  SENDER_IDS_HISTORY: '/sms/sender-ids-history',
  SENDER_IDS_APPROVAL: '/sms/sender-ids-approval',
};

const SMSRoutes: () => JSX.Element = () => {
  return (
    <Routes>
      <Route path={ROUTES.DASHBOARD} element={<DashboardScreen />} />
      <Route path={ROUTES.USERS} element={<UsersScreen />} />
      <Route path={ROUTES.SENDER_IDS_NEW} element={<SenderIdsCreatePage />} />
      <Route path={ROUTES.SENDER_IDS_HISTORY} element={<SenderIdsHistoryPage />} />
      <Route path={ROUTES.SENDER_IDS_APPROVAL} element={<SenderIdsApprovalPage />} />

      <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} />} />
    </Routes>
  );
};

export default SMSRoutes;
