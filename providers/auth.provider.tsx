"use client"
import { getProfile, login, logout, register } from '@/api/auth.api'
import AuthContext from '@/contexts/auth.context'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const AuthProvider = ({ children } : Readonly < { children : React.ReactNode }>) => {
  const router = useRouter()
  const queryClient = useQueryClient()

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
      queryClient.invalidateQueries({
        queryKey : ['auth-profile']
      })
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
      queryClient.setQueryData(['auth-profile'], null)
    },
    onError : (error) => {
      toast.error(error?.message ?? "Logout failded");
    }
  })

  // Register
      const { mutate: registerMutate, isPending : registerPending } = useMutation({
    mutationFn : register,
    onSuccess : (data) => {
      toast.success(data?.message ?? "Register success");
      router.replace('/')
    },
    onError : (error) => {
      toast.error(error?.message ?? "Register failded");
    }
  })


  return (
    <AuthContext.Provider value ={{
        user : data?.data,
        isLoading : !!isLoading || !!isPending || !!logoutPending,
        login : loginMutate,
        logout : logoutMutate,
        signUp : registerMutate
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;