import smsMenu from 'services/sms/const/menu';
import surveyMenu from 'services/survey/const/menu';

import { service } from 'helpers/service';

const getServiceMenu = (portal: string) => {
  switch (portal) {
    case 'sms':
      return smsMenu;
    case 'survey':
      return surveyMenu;
    default:
      return smsMenu;
  }
};

const menu = getServiceMenu(service);

export { menu };
