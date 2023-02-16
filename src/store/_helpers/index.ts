import { IAnyType } from './types';

const getPayloadIds = (data: any) => data.map((obj: any) => obj.id);

function getFormattedPayload<T extends IAnyType>(data: Array<T>) {
  const obj: { [key: string]: T } = {};

  data.forEach((element: T) => {
    obj[element.id] = element;
  });
  return obj;
}

export { getPayloadIds, getFormattedPayload };
