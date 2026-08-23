"use client"
import AuthContext from '@/contexts/uth.context'
import React from 'react'

const AuthProvider = ({ children } : Readonly < { children : React.ReactNode }>) => {
  return (
    <AuthContext.Provider value ={{
        user : null,
        isLoading : false,
        login :() => {},
        logout : () => {},
        signUp : () => {}
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;