import { SignInType, SignUpType } from "../interfaces/userType";
import fetcher from "./fetcherAPI";

export const signInAPI = async (payload: SignInType) => {
  const response = await fetcher.post("/auth/signin", payload);
  return response.data?.content;
};

export const signUpAPI = async (payload: SignUpType) => {
  const response = await fetcher.post("/auth/signup", payload);
  return response.data?.content;
};
