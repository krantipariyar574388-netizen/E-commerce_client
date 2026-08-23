import { loginSchema, registerSchema } from "@/schema/auth.schema";
import * as yup from "yup";

export type TLogin = yup.InferType<typeof loginSchema>;

export type TRegister = yup.InferType<typeof registerSchema>;

export type IUser = {
    profile_image : {
        _id : string;
        path : string;
        public_id : string;
    };
} & TRegister;