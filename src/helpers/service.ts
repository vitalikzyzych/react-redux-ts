export const service = localStorage.getItem('currentService') || 'sms';

export const getApiUrl = () => {
  switch (service) {
    case 'pay':
      return process.env.REACT_APP_SMS_API_BASE_URL;
    case 'sms':
      return process.env.REACT_APP_SMS_API_BASE_URL;
    case 'survey':
      return process.env.REACT_APP_SMS_API_BASE_URL;
    default:
      return process.env.REACT_APP_SMS_API_BASE_URL;
  }
};
