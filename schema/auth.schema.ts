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
  fullName: yup.string().required("Full name is required"),
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
  phone: yup
    .string()
    .matches(/^\d+$/, {
      message: "phone must contains only numbers",
      excludeEmptyString: true,
    })
    // .min(10, "numbers must contain 10 digits")
    // .max(10, "numbers must contain 10 digits")
    .test("test-length", "phone must contain 10 digits", (value) => {
      if (value && value.trim().length === 10) {
        return true;
      }
    })
    .notRequired(),
});
