import { axios } from ".";

export const getLotesRequest = async (): Promise<any[]> =>
  (await axios.get(`lotes`)).data;

export const getLoteRequest = async (id: number) =>
  (await axios.get(`lotes/${id}`)).data;

export const createLoteRequest = async (lote: any) =>
  await axios.post(`lotes`, lote);

export const updateLoteRequest = async (id: number, lote: any) =>
  await axios.put(`lotes/${id}`, lote);

export const deleteLoteRequest = (id: number) => axios.delete(`lotes/${id}`);
