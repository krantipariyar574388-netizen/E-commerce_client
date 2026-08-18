import React from 'react'
import SidebarLinks from './links'

const SideBar = () => {
  return (
    <aside className='w-60 border-r border-gray-400  '>
        {/* logo */}
        <div className='h-16'>

        </div>

        {/*  */}
        <SidebarLinks />
    </aside>
  )
}

export default SideBar