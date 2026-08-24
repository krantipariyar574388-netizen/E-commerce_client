"use client"
import { addToWishlist, getWishlist, removeFromWishlist } from '@/api/wishList.api'
import WishlistContext from '@/contexts/wishList.context'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

const WishlistProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryFn: getWishlist,
    queryKey: ['wishlist'],
    refetchOnWindowFocus: 'always',
    retry: false,
  })

  // Add to wishlist
  const { mutate: addMutate, isPending: addPending } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: (data) => {
      toast.success(data?.message ?? "Added to wishlist")
      queryClient.invalidateQueries({
        queryKey: ['wishlist']
      })
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Failed to add to wishlist")
    }
  })

  // Remove from wishlist
  const { mutate: removeMutate, isPending: removePending } = useMutation({
    mutationFn: removeFromWishlist,
    onSuccess: (data) => {
      toast.success((data as { message?: string })?.message ?? "Removed from wishlist")
      queryClient.invalidateQueries({
        queryKey: ['wishlist']
      })
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Failed to remove from wishlist")
    }
  })

  const isInWishlist = (productId: string) => {
    return !!data?.data?.wishlist?.some(
      (item: any) => item?.product?._id === productId
    )
  }

  const getWishlistItemId = (productId: string) => {
    return data?.data?.wishlist?.find(
      (item: any) => item?.product?._id === productId
    )?._id
  }

  const wishlistContextValue = {
      wishlist: data?.data?.wishlist ?? [],
      isLoading: !!isLoading || !!addPending || !!removePending,
      addToWishlist: addMutate,
      removeFromWishlist: removeMutate,
      isInWishlist,
      getWishlistItemId,
  }

  return (
    <WishlistContext.Provider value={wishlistContextValue}>
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider