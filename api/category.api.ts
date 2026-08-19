import axios from "axios";

export const getAllCategories = async () => {
  try {
    const response = await axios.get("http://localhost:8080/category");
    return response.data.data.category;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error?.response?.data;
  }
};