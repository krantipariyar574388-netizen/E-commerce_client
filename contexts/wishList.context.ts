import { createContext } from "react";

interface IWishlistContext {
  wishlist: any[];
  isLoading: boolean;
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<IWishlistContext>({
  wishlist: [],
  isLoading: false,
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
});

export default WishlistContext;