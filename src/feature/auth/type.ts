export interface ParamLoginInterface {
  username: string;
  password: string;
}
export interface ParamRegisterInterface {
  fullname: string;
  email: string;
  password: string;
  re_password: string;
  phone: string;
  birth_day?: string;
}

export interface ParamInputProductInterface {
  nameProduct: string;
  price: number;
  costPrice: number;
}
