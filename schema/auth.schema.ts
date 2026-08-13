import * as yup from "yup";

// Login schema
export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required!"),
  password: yup.string().required("Password is required!"),
});

// Register schema
export const registerSchema = yup.object({
  fullname: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "At least one uppercase is required")
    .matches(/[a-z]/, "At least one lowercase is required")
    .matches(
      /[!@#$%^&*()<>,.?":{}|]/,
      "At least one special character is required",
    )
    .required("Password is required"),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password do not match")
    .required("Confirm password is required"),
  phone: yup.string().required("Phone number is required"),
});
