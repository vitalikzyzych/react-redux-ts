import { ROUTES } from '../routes';

export default [
  {
    label: 'Dashboard',
    icon: 'chart-line',
    to: ROUTES.DASHBOARD,
  },

  {
    label: 'Sender Ids',
    icon: 'message-text',
    items: [
      {
        label: 'New Sender Id',
        icon: 'hexagon-plus',
        to: ROUTES.SENDER_IDS_NEW,
      },
      {
        label: 'Sender IDs Approval',
        icon: 'square-list',
        to: ROUTES.SENDER_IDS_APPROVAL,
      },
      {
        label: 'Sender IDs History',
        icon: 'square-list',
        to: ROUTES.SENDER_IDS_HISTORY,
      },
    ],
  },

  {
    label: 'Routing',
    icon: 'route',
    items: [
      {
        label: 'New Routing',
        icon: 'hexagon-plus',
        to: ROUTES.ROUTING_NEW,
      },
      {
        label: 'Routing History',
        icon: 'square-list',
        to: ROUTES.ROUTING_HISTORY,
      },
    ],
  },
  {
    label: 'Users',
    icon: 'users',
    to: ROUTES.USERS,
  },
];
