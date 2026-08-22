import { TProducts } from '@/types/products.types'
import Image from 'next/image'
import Link from 'next/link'
import { FaRupeeSign } from "react-icons/fa6";


interface IProps {
    products: TProducts
}

const ProductCard = ({ products: { _id, name, cover_image, description, rate } }: IProps) => {
    return (
        <div className='max-w-60 h-full border border-gray-300 rounded-md group flex flex-col'>
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
                <div className='flex'>
                <FaRupeeSign />
                <p>{rate}</p>
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