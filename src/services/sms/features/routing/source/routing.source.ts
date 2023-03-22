import { processRequest } from 'source/processor';

export const listRouting = async () => processRequest({ url: '/api/v1/admin/sms/routes' });
