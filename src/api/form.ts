import { FormSchema } from "@/types";
import axios from "./axios";

export const addEmailToExcel = (data: FormSchema) =>
  axios.post(`/subscriber`, data);
