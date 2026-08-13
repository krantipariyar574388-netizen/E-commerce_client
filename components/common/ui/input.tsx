import React from "react";
import { UseFormRegister } from "react-hook-form";

interface IProps {
  name: string;
  type?: "text" | "password" | "email";
  label: string;
  placeholder?: string;
  id: string;
  register: UseFormRegister<any>;
  error?: string;
}

const Input = ({
  name,
  id,
  label,
  placeholder = "start typing..",
  type = "text",
  register,
  error,
}: IProps) => {
  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-sm front-semibold text-grap-600" htmlFor="email">
        {label}
      </label>
      <input
        {...register(name)}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        className={` border px-2 py-3 rounded-md ${error ?
          "border-red-500 focus: outline-red-500 focus: border-red-500"
          :
          " border-gray-400 focus: outline-sky-500 focus: border-sky-500"} `}
      />
      <small className="text-red-500 h-3 -mt-0.5">{error}</small>
    </div>
  );
};

export default Input;
