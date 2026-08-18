import AdminHeader from '@/components/admin/layout/header'
import SideBar from '@/components/admin/layout/sidebar'
import React from 'react'

const AdminLayout = ({ children } : { children : React.ReactNode }) => {
  return (
    <main className='flex h-screen'>
        <SideBar />
        <section className='w-full flex flex-col'>
        <AdminHeader/>
        <section className='flex-1'>
            {children}
        </section>
        </section>
    </main>
  )
}

export default AdminLayout