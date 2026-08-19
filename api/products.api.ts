import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/products");
    return response.data?.data?.product || [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error?.response?.data;
  }
};