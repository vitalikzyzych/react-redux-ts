export interface IServiceOption {
  [key: string]: string;
}

export type StoredDocuments<T> = { [key: string]: T };
