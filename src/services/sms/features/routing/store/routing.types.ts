export interface InitialState {
  list: Array<Routing>;
  isLoading?: boolean;
}

export interface Routing {
  createdAt: string;
  id: string;
  phoneNumberLength: string;
  title: string;
  topic: string;
  updatedAt: string;
}
