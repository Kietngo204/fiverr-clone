import { SignInType, SignUpType } from "../interfaces/userType";
import fetcher from "./fetcherAPI";

export const signInAPI = (payload: SignInType) => {
  try {
    const response = fetcher.post("/auth/signin", payload);
    return response;
  } catch (error: any) {
    throw error.response.data?.content;
  }
};

export const signUpAPI = async (payload: SignUpType) => {
  try {
    const response = await fetcher.post("/auth/signup", payload);
    return response.data?.content;
  } catch (error: any) {
    throw error.response.data;
  }
};
