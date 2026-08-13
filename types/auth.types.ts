import { loginSchema } from "@/schema/auth.schema";
import * as yup from "yup";

// type TLogin = {
//   email: string;
//   password: string;
// };

export type TLogin = yup.InferType<typeof loginSchema>;