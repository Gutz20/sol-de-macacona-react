import { FormSchemaLogin } from "@/types/FormLogin";
import axios from "./axios";

export const loginRequest = async (user: FormSchemaLogin) =>
  await axios.post(`/auth/login`, user);

export const getCurrentUserRequest = async () =>
  await axios.get(`/auth/profile`);

export const registerRequest = (user: any) =>
  axios.post(`/auth/register`, user);

export const recoveryPasswordRequest = () =>
  axios.post(`/users/recoveryPassword`);
