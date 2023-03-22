export interface InitialState {
  list?: Array<Customer>;
  isLoading?: boolean;
}

export interface Customer {
  creationdate: string;
  customerid: string;
  customername: string;
  email: string;
  firstname: string;
  lastname: boolean;
  phonenumber: string;
  smsservice: string;
}
