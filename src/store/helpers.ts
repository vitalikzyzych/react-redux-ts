import { StoredDocuments } from 'types';

function getPayloadIds<T>(data: StoredDocuments<T>) {
  return Object.keys(data) as [];
}

// function getFormattedPayload<T>(data: Array<T>, primaryKey: string) {
//   const obj: { [key: string]: T } = {};

//   data.forEach((element: T) => {
//     obj[element[primaryKey]] = element;
//   });
//   return obj;
// }

export { getPayloadIds };
