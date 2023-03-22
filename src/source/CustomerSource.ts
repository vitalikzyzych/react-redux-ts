import { processCubeRequest } from 'source/cubeProcessor';

interface ICubeRequestPayload {
  search?: string;
}

export const listCustomers = async (params?: ICubeRequestPayload) => {
  let query =
    'cubejs-api/v1/load?query={"dimensions":["Basesmsuserinfo.smsservice", "Basesmsuserinfo.customerid", "Basesmsuserinfo.customername", "Basesmsuserinfo.email", "Basesmsuserinfo.phonenumber", "Basesmsuserinfo.firstname", "Basesmsuserinfo.lastname", "Basesmsuserinfo.creationdate"]';
  if (params?.search) {
    query =
      query +
      ',"filters": [{"dimension": "Basesmsuserinfo.customername", "operator": "contains", "values": ["' +
      params?.search +
      '"]}],';
  }
  // query = query + '",order": {"Sessions.' + order + '": "' + direction + '"},';
  // query = query + '"limit": ' + limit + ',';
  // query = query + '"offset": ' + offset;
  query = query + '}';
  return processCubeRequest(query);
};

export const totalCount = async () => {
  const query = 'cubejs-api/v1/load?query={ "measures":["Basesmsuserinfo.count"]}';
  return processCubeRequest(query);
};
