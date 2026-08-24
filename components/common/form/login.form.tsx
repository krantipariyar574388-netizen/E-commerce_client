"use client";
import { useForm } from "react-hook-form";
import Input from "../ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schema/auth.schema";
import { TLogin } from "@/types/auth.types";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import AuthContext from "@/contexts/auth.context";


const LoginForm = () => {
  const router = useRouter()
  const { login} = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm<TLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver : yupResolver(loginSchema)
  });

  const onSubmit = async (data: TLogin) => {
    login(data)
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
