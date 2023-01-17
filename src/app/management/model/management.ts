import { Empresa } from './empresa';
export interface Management {
  _id: number,
  date: string,
  product: string,
  quant: string,
  valueOne: string,
  valueMany: string,
  modality: string,
  formPag: string,
  empresa: Empresa,
  authorizer: string,
  requester: string
}
