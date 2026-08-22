import axios from "axios";
import api from ".";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data?.data?.product || [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error?.response?.data;
  }
};