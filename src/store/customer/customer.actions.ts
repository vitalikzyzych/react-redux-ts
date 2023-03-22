import { createAsyncThunk } from '@reduxjs/toolkit';

import { listCustomers } from 'source/CustomerSource';

import { Customer } from 'store/customer/customer.types';

const customerFields = [
  'creationdate',
  'customerid',
  'customername',
  'email',
  'firstname',
  'lastname',
  'phonenumber',
  'smsservice',
];

interface CubeCustomer {
  [key: string]: any; // Use an index signature to allow any property name and value
}

const formatCubeResponse = (
  response: Array<CubeCustomer>,
  fields: Array<string>,
  cubeKey: string,
): Array<CubeCustomer> => {
  const data: Array<CubeCustomer> = [];

  response.forEach((element: any) => {
    const formattedElement: CubeCustomer = {};
    fields.forEach((field: string) => {
      formattedElement[field] = element[`${cubeKey}.${field}`];
    });

    data.push(formattedElement);
  });
  return data as Array<Customer>; // Return the array of formatted customer objects
};

export const customerList = createAsyncThunk('customer/list', async () => {
  try {
    const customerIds = JSON.parse(localStorage.getItem('customers') as string) as Array<Customer>;
    if (customerIds?.length) {
      return customerIds;
    } else {
      const response = await listCustomers();
      const formattedResponse = formatCubeResponse(
        response,
        customerFields,
        'Basesmsuserinfo',
      ) as Array<Customer>;
      localStorage.setItem('customers', JSON.stringify(formattedResponse));
      return formattedResponse || [];
    }
  } catch (error) {
    return [];
  }
});
