import { TProducts } from '@/types/products.types'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa';
import { FaRupeeSign } from "react-icons/fa6";


interface IProps {
    products: TProducts
}

const ProductCard = ({ products: { _id, name, cover_image, description, rate, category, brand } }: IProps) => {
    return (
        <div className='relative h-full max-w-80 border border-gray-300 rounded-md group flex flex-col overflow-clip'>
            <button className='absolute top-2 right-1 z-10 cursor-pointer border border-yellow-600 h-8 aspect-square rounded-full flex justify-left items-center p-1 bg-yellow-500/30'>
                <FaRegHeart className='text-yellow-600 size={20}' />
            </button>
            {/* image */}
            <div className='w-full h-35 rounded-t-md overflow-clip'>
                <Image
                    src={cover_image?.path}
                    alt={name + '-' + 'image'}
                    height={1000}
                    width={1000}
                    className='h-full w-full transition-all duration-300 group-hover:scale-[1.1]'
                />
            </div>

            <div className='p-1 pb-2 flex flex-col gap-1 mt-2 grow'>
                <p className='text-md font-semibold text-gray-700'>{name}</p>

                <div className='flex gap-1 items-center my-1'>
                    <p className='px-1 py-0.5 border border-yellow-500 bg-yellow-500/20 rounded-lg text-xs'>{category.name}</p>
                    <p className='px-1 py-0.5 border border-yellow-500 bg-yellow-500/20 rounded-lg text-xs'>{brand.name}</p>
                </div>

                <div className='flex item-center gap-1'>
                <FaRupeeSign size={16}/>
                <p className='text-yellow-500 font-semibold'>{rate}</p>
            </div>
                <p className='text-sm text-gray-500 line-clamp-4'>{description}</p>
            </div>
            <Link href={`/products/${_id}`}>
                <div className='w-full py-3 text-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-md transition-colors duration-200 cursor-pointer'>
                    View Details
                </div> 
            </Link>
        </div>
    )
}

export default ProductCard