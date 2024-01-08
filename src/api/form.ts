import { FormSchema } from "@/types";
import axios from "./axios";

export const addEmailToExcel = (data: FormSchema) =>
  axios.post(`/subscriber`, data);

export const getCorreosRequest = async (): Promise<any[]> =>
  (await axios.get(`forms`)).data;

export const deleteCorreoRequest = (id: number) => axios.delete(`forms/${id}`);

