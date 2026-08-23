"use client"
import { getProfile, login, logout } from '@/api/auth.api'
import AuthContext from '@/contexts/uth.context'
import { useMutation, useQuery } from '@tanstack/react-query'
import router, { useRouter } from 'next/router'
import React, { useReducer } from 'react'
import toast from 'react-hot-toast'

const AuthProvider = ({ children } : Readonly < { children : React.ReactNode }>) => {
  const router = useRouter()

  const { data, isLoading } = useQuery({
    queryFn : getProfile,
    queryKey : ['auth-profile'],
    refetchOnWindowFocus: 'always',
    refetchInterval: 5 * 60 * 1000,
    retry : false
  })
 
    // Login
    const { mutate: loginMutate, isPending } = useMutation({
    mutationFn : login,
    onSuccess : (data) => {
      toast.success(data?.message ?? "Login success");
      router.replace('/')
    },
    onError : (error) => {
      toast.error(error?.message ?? "Login failded");
    }
  })

  // Logout
  const { mutate: logoutMutate, isPending: logoutPending } = useMutation({
    mutationFn : logout,
    onSuccess : (data) => {
      toast.success((data as { message?: string })?.message ?? "Logout success");
      router.replace('/')
    },
    onError : (error) => {
      toast.error(error?.message ?? "Logout failded");
    }
  })


  return (
    <AuthContext.Provider value ={{
        user : data?.data,
        isLoading : !!isLoading || !!isPending || !!logoutPending,
        login : loginMutate,
        logout : logoutMutate,
        signUp : () => {}
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;