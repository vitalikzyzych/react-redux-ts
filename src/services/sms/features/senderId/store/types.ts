export interface InitialState {
  ids?: [];
  isLoading?: boolean;
}

export interface InitialStoreState<T> {
  data: { [key: string]: T };
}

export interface User {
  id: string | number;
  name: string;
}

export interface SenderId {
  createdAt: string;
  customerId: string;
  customerName: string;
  email: string;
  id: string;
  isCommon: boolean;
  smsType: string;
  status: string;
  title: string;
  updatedAt: string;
}
