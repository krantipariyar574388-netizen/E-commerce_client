import axios from "axios";
import api from ".";

export const getAllCategories = async () => {
  try {
    const response = await api.get("/category");
    return response.data.data.category;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error?.response?.data;
  }
};