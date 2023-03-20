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
