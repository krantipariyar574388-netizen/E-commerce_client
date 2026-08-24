import { createContext } from "react";

interface IWishlistContext {
  wishlist: any[];
  isLoading: boolean;
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (wishlistItemId: string) => void;
  isInWishlist: (productId: string) => boolean;
  getWishlistItemId: (productId: string) => string | undefined;
}

const WishlistContext = createContext<IWishlistContext>({
  wishlist: [],
  isLoading: false,
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
  getWishlistItemId: () => undefined,
});

export default WishlistContext;