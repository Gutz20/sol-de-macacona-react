import axios from "./axios";

export const addEmailToExcel = (mail: string) =>
  axios.post(`/subscriber`, { email: mail });
