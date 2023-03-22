// ## Generator Reducer Imports
import { service } from 'helpers/service';
import customer from './customer/customer.slice';
import settings from './settings/settings.slice';

import smsStore from 'services/sms/features/store';

const getServiceStore = (service: string) => {
  switch (service) {
    case 'sms':
      return smsStore;
    case 'survey':
      return smsStore;
    default:
      return smsStore;
  }
};

const reducer = getServiceStore(service);

export default {
  // ## Generator Reducers
  ...reducer,
  customer,
  settings,
};
