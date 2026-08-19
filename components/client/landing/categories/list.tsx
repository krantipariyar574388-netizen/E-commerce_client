'use client'
import React from 'react'
import CategoryCard from './card'
import { TCategory } from '@/types/category.types'
import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '@/api/category.api'

const CategoryList = () => {

    const { isLoading, error, isError, data } = useQuery({
        queryFn: getAllCategories,
        queryKey: ['get-all-categories']
    })


    return (
        <div className='grid grid-cols-5 mt-5 gap-6'>
  {Array.isArray(data) ? (
    data.map((category: TCategory) => (
      <CategoryCard key={category._id} category={category} />
    ))
  ) : (
    <p className="col-span-5 text-gray-500">Loading categories...</p>
  )}
</div>
    )
}

export default CategoryList