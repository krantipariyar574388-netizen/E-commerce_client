"use client";
import { useReducer, useState } from "react";
import Input from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/schema/auth.schema";
import { TRegister } from "@/types/auth.types";
import { register as registerUser } from "@/api/auth.api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<TRegister>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      cpassword: "",
      phone: "",
    },
    resolver : yupResolver(registerSchema)
  });

  // mutation
  const {mutate, isPending } = useMutation({
    // mutation : register,
    mutationFn : (formData: TRegister) => registerUser(formData),
    onSuccess : (data) => {
      toast.success(data?.message ?? "Register success")
      router.replace('/login')
    },
    onError : (error) => {
      toast.error(error?.message ?? "Register failed")
    }
  })

  //on Submit
  const onSubmit = async (data: TRegister) => {
      mutate(data)
    };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 mt-4"
    >
      <Input
        register={register}
        id="fullName"
        label="Full Name"
        name="fullName"
        placeholder="Enter your full name"
        error={errors?.fullName?.message}
      />

      <Input
        register={register}
        id="email"
        label="Email"
        name="email"
        placeholder="Enter email or phone number"
        error={errors?.email?.message}
      />

      <Input
        register={register}
        id="password"
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        error={errors?.password?.message}
      />

      <Input
        register={register}
        id="cpassword"
        label="Confirm Password"
        name="cpassword"
        placeholder="Enter your confirm password"
        type={"password"}
        error={errors?.cpassword?.message}
      />

      <Input
        register={register}
        id="phone"
        label="Phone"
        name="phone"
        placeholder="Enter your phone number"
        error={errors?.phone?.message}
      />

      <div className="mt-5">
        <button
          type={"submit"}
          className="bg-sky-500 text-white font-bold w-full py-3 cursor-pointer rounded-sm hover:bg-sky-400 active:bg-sky-600 transition-all duration-300"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
