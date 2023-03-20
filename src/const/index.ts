import { IServiceOption } from 'types';

export const SERVICES: Array<string> = ['survey', 'ussd', 'sms', 'pay', 'airtime'];

export const SERVICE_OPTIONS: Array<IServiceOption> = [
  { name: 'SURVEY', value: 'survey' },
  { name: 'USSD', value: 'ussd' },
  { name: 'SMS', value: 'sms' },
  { name: 'PAY', value: 'pay' },
  { name: 'AIRTIME', value: 'airtime' },
];
