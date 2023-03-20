import React from 'react';
import SMSRoutes, { ROUTES as SMS_ROUTES } from 'services/sms/routes';
import SurveyRoutes, { ROUTES as SURVEY_ROUTES } from 'services/survey/routes';
import PayRoutes, { ROUTES as PAY_ROUTES } from 'services/pay/routes';

import { service } from 'helpers/service';

const getServiceRoutes = (portal: string) => {
  switch (portal) {
    case 'sms':
      return SMSRoutes;
    case 'survey':
      return SurveyRoutes;
    case 'pay':
      return PayRoutes;
    default:
      return SMSRoutes;
  }
};

const getServiceRouteKeys = (portal: string) => {
  switch (portal) {
    case 'sms':
      return SMS_ROUTES;
    case 'survey':
      return SURVEY_ROUTES;
    case 'pay':
      return PAY_ROUTES;
    default:
      return SMS_ROUTES;
  }
};

const ServiceRoutes = getServiceRoutes(service);
export const ROUTES = getServiceRouteKeys(service);

const AppRoutes: React.FC = () => {
  return <ServiceRoutes />;
};

export default AppRoutes;
