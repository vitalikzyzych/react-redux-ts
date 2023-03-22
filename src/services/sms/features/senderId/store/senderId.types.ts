export interface InitialState {
  list: Array<SenderId>;
  isLoading?: boolean;
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
