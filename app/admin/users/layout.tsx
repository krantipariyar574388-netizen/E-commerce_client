import React from 'react'

const AdminLayout = ({ children } : { children : React.ReactNode }) => {
  return (
    <main className='flex h-screen'>

        <aside className='w-60 border-r border-gray-400'>
            Sidebar
        </aside>
        <section className='w-full'>
            <nav className='w-full h-16 border-b border-gray-500'>
                <h1>
                    Hello Admin
                </h1>
            </nav>
            <section className='flex-1'>
                {children}
            </section>
        </section>
    </main>
  )
}

export default AdminLayout