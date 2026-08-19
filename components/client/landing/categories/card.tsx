import { TCategory } from '@/types/category.types'
import Image from 'next/image'
import React from 'react'

interface IProps {
    category: TCategory
}

const CategoryCard = ({ category: { name, image, description } }: IProps) => {
    return (
        <div className='max-w-60 border border-gray-300 rounded-md group'>
            {/* image */}
            <div className='w-full h-35 rounded-t-md overflow-clip'>
                <Image
                    src={image.path}
                    alt={name + '-' + 'image'}
                    height={1000}
                    width={1000}
                    className='h-full w-full transition-all duration-300 group-hover:scale-[1.1]'
                />
            </div>
            {/* name  */}
            {/* desc */}
            <div className='p-1 pb-2 flex flex-col gap-1 mt-2 '>
                <p className='text-md font-semibold text-gray-700'>{name}</p>
                <p className='text-sm text-gray-500 line-clamp-4'>{description}</p>
            </div>
        </div>
    )
}

export default CategoryCard