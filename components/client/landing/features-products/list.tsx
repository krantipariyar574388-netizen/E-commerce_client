'use client'
import { useQuery } from '@tanstack/react-query'
import { TProducts } from '@/types/products.types'
import ProductCard from '../product-card'
import { getAllProducts } from '@/api/products.api'

const ProductList = () => {

    const { isLoading, error, isError, data } = useQuery({
        queryFn: getAllProducts,
        queryKey: ['get-all-products']
    })

    if (isLoading) {
        return <p className="col-span-5 text-gray-500">Loading products...</p>
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-5 mb-10 gap-10 justify-items-center'>
  {Array.isArray(data) && data.length > 0 ? (
                data.map((product: TProducts) => (
                    <ProductCard key={product._id} products={product} />
                ))
            ) : (
                <p className="col-span-5 text-gray-500">No products found.</p>
            )}
</div>
    )
}

export default ProductList