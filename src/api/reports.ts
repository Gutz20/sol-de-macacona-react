import axios from "./axios";

export const getExcelReport = () =>
  axios.get(`export/subscribers`, {
    responseType: "blob",
  });
