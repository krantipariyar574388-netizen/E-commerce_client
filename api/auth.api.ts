import { TLogin, TRegister } from "@/types/auth.types";
import axios from "axios";
import api from ".";

// login
export const login = async (data: TLogin) => {
  try {
    const response = await api.post("/auth/login", data);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};

// logout
export const logout = async () => {
  try {
    const response = await api.post("/auth/logout");
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};

// register
export const register = async (data: TRegister) => {
  try {
    const response = await api.post("/auth/register", data);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};

export const getProfile = async () => {
  try {
    const response = await api.get("/auth/profile");
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};
