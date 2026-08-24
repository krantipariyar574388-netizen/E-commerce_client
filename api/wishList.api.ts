import api from ".";

// get wishlist
export const getWishlist = async () => {
  try {
    const response = await api.get("/wishlist");
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};

// add to wishlist
export const addToWishlist = async (productId: string) => {
  try {
    const response = await api.post("/wishlist", { productID: productId });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};

// remove from wishlist
export const removeFromWishlist = async (wishlistItemId: string) => {
  try {
    const response = await api.delete(`/wishlist/${wishlistItemId}`);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};