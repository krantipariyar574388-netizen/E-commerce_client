'use client'
import { useQuery } from '@tanstack/react-query'
import { TProducts } from '@/types/products.types'
import ProductCard from '../product-card'
import { getAllProducts } from '@/api/products.api'

const NewArrivalProductsList = () => {

    const { isLoading, error, isError, data } = useQuery({
        queryFn: getAllProducts,
        queryKey: ['get-all-new-arrival-products']
    })


    return (
        <div className='grid grid-cols-5 mt-5 gap-6'>
  {Array.isArray(data) ? (
    data.map((products: TProducts) => (
      <ProductCard key={products._id} products={products} />
    ))
  ) : (
    <p className="col-span-5 text-gray-500">Loading new arrival products...</p>
  )}
</div>
    )
}

export default NewArrivalProductsList