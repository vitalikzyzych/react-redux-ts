import { processRequest } from 'source/processor';

export const listSenderIds = async () => processRequest({ url: '/api/v1/admin/sms/senderIds' });
