import { ROUTES } from '../routes';

export default [
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    to: ROUTES.DASHBOARD,
  },

  {
    label: 'Sender Ids',
    icon: 'pi pi-prime',
    items: [
      {
        label: 'New Sender Id',
        icon: 'pi pi-prime',
        to: ROUTES.SENDER_IDS_NEW,
      },
      {
        label: 'Approval',
        icon: 'pi pi-prime',
        to: ROUTES.SENDER_IDS_APPROVAL,
      },
      {
        label: 'History',
        icon: 'pi pi-prime',
        to: ROUTES.SENDER_IDS_HISTORY,
      },
    ],
  },
  {
    label: 'Users',
    icon: 'pi pi-prime',
    to: ROUTES.USERS,
  },
];
