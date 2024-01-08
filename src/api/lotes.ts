import { axios } from ".";

export const getLotesRequest = async (): Promise<any[]> =>
  (await axios.get(`lotes`)).data;

export const deleteLoteRequest = (id: number) => axios.delete(`lotes/${id}`);
