"use client";
import { useForm } from "react-hook-form";
import Input from "../ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schema/auth.schema";
import { TLogin } from "@/types/auth.types";
import { login } from "@/api/auth.api";
import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<TLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver : yupResolver(loginSchema)
  });

  const { mutate, isPending } = useMutation({
    mutationFn : login,
    onSuccess : (data) => {
      toast.success(data?.message ?? "Login success");
      router.replace('/')
    },
    onError : (error) => {
      toast.error(error?.message ?? "Login failded");
    }
  })

  const onSubmit = async (data: TLogin) => {
    mutate(data)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 mt-4"
    >
      <Input
        register={register}
        id="email"
        label="Email"
        name="email"
        placeholder="Enter email or phone number"
        type={"email"}
        error={errors?.email?.message}
      />

      <Input
        register={register}
        id="password"
        label="Password"
        name="password"
        placeholder="Enter your password"
        type={"password"}
        error={errors?.password?.message}
      />

      <div className="mt-5">
        <button
          type={"submit"}
          className="bg-sky-500 text-white font-bold w-full py-3 cursor-pointer rounded-sm hover:bg-sky-400 active:bg-sky-600 transition-all duration-300"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
