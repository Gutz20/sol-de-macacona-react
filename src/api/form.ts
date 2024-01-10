import { FormSchema } from "@/types";
import axios from "./axios";

export const addEmailToExcel = (data: FormSchema) =>
  axios.post(`/subscriber`, data);

export const getCorreosRequest = async (): Promise<any[]> =>
  (await axios.get(`forms`)).data;

export const getCorreoRequest = async (id: number) =>
  (await axios.get(`forms/${id}`)).data;

export const createCorreoRequest = async (correo: any) =>
  await axios.post(`forms`, correo);

export const updateCorreoRequest = async (id: number, correo: any) =>
  await axios.put(`forms/${id}`, correo);

export const deleteCorreoRequest = (id: number) => axios.delete(`forms/${id}`);
