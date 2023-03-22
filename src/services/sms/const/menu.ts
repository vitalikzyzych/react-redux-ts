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
        label: 'Sender IDs Approval',
        icon: 'pi pi-prime',
        to: ROUTES.SENDER_IDS_APPROVAL,
      },
      {
        label: 'Sender IDs History',
        icon: 'pi pi-prime',
        to: ROUTES.SENDER_IDS_HISTORY,
      },
    ],
  },

  {
    label: 'Routing',
    icon: 'pi pi-prime',
    items: [
      {
        label: 'New Routing',
        icon: 'pi pi-prime',
        to: ROUTES.ROUTING_NEW,
      },
      {
        label: 'Routing History',
        icon: 'pi pi-prime',
        to: ROUTES.ROUTING_HISTORY,
      },
    ],
  },
  {
    label: 'Users',
    icon: 'pi pi-prime',
    to: ROUTES.USERS,
  },
];
