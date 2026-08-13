import * as yup from "yup";

// Login schema
export const loginSchema = yup.object({
  email : yup.string().email("Invalid email format").required("Email is required!"),
  password : yup.string().required("Password is required!")
})