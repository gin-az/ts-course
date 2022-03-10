export interface IAddress {
  street: string;
  city: string;
  zipcode: string;

}

export interface IUser {
  id: number;
  name: string;
  email: string;
  // Для вложенных объектов создается отдельный интерфейс
  address: IAddress;

}