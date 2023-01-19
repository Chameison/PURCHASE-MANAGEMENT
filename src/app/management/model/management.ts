import { Cliente } from './cliente';
export interface Management {
  _id: number,
  date: string,
  product: string,
  quant: string,
  valueOne: string,
  valueMany: string,
  modality: string,
  formPag: string,
  empresa: Cliente,
  authorizer: string,
  requester: string
}
