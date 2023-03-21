import axios from 'axios';
import { isTokenValid, getToken, doLogout } from 'source/AuthSource';
import { getApiUrl } from 'helpers/service';

export const processRequest = async ({
  method = 'GET',
  url = '',
  data = {},
  params = {},
  fullUrl = false,
}) => {
  if (isTokenValid()) {
    const requestParams = {
      method,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      url: fullUrl ? url : getApiUrl() + url,
      data,
      params,
    };
    return axios(requestParams)
      .then((res) => res.data)
      .catch((error) => {
        console.log('error', error.response);
        return error.response.data;
      });
  } else {
    doLogout();
    return false;
  }
};
