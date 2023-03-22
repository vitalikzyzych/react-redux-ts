import axios from 'axios';
import { isTokenValid, doLogout } from 'source/AuthSource';
import { getAnalyticsUrl } from 'helpers/service';

export const processCubeRequest = async (query: string) => {
  const fullQuery = getAnalyticsUrl() + '/' + query;

  if (isTokenValid()) {
    return axios
      .get(fullQuery)
      .then((res) => res.data.data)
      .catch((error) => console.log(error));
  } else {
    doLogout();
    return false;
  }
};
