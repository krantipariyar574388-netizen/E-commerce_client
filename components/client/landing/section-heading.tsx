import Link from 'next/link'
import React from 'react'
import { IoChevronDown } from 'react-icons/io5'

interface Iprops {
    title : string,
    subTitle : string,
    link? : string
}

const SectionHeading = ({ subTitle, title, link} : Iprops) => {
  return (
    <header className='flex items-center justify-between'>
            {/* left */}
            <div>
                <h3 className='text-md front-bold text-gray-700'> {title}</h3>
                <p className='text-sm text-gray-500'>{subTitle}</p>
            </div>
                        
            {/* right */}
            {!!link && <Link href={'#'}>
            <div className='felx gap-0.5 items-center text-gray-500 fint semibold'>
                <span className='text-sm'>View All</span>
                <IoChevronDown />
            </div>
            </Link>}
        </header>
  )
}

export default SectionHeading