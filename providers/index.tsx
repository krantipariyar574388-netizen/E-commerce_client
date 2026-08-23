import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactQueryProvider from './query_provider'
import AuthProvider from './auth.provider'

const Providers = ({ children } : Readonly < { children : React.ReactNode }>) => {
  return (
    <ReactQueryProvider>
        <AuthProvider>
            {children}
        </AuthProvider>
    </ReactQueryProvider>
  )
}

export default Providers