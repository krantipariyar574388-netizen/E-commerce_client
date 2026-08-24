import WishlistContext from "@/contexts/wishList.context";
import { useContext } from "react";

const useWishlist = () => useContext(WishlistContext);

export default useWishlist;