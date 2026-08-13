import { loginSchema, registerSchema } from "@/schema/auth.schema";
import * as yup from "yup";

// type TLogin = {
//   email: string;
//   password: string;
// };

export type TLogin = yup.InferType<typeof loginSchema>;

// type TRegister = {
//     name : string,
//     email : string,
//     password : string,
//     cpassword : string,
//     phone : string,
// }

export type TRegister = yup.InferType<typeof registerSchema>;