import { IUser, TLogin, TRegister } from "@/types/auth.types";
import React from "react";

type TAuthContext = {
    user : IUser | null;
    isLoading : boolean;
    logout : () => void;
    login : (data : TLogin) => void;
    signUp : (data : TRegister) => void;
};

const initialValue : TAuthContext = {
    user : null,
    isLoading : false,
    logout : () => {},
    login : () => {},
    signUp : () => {},
};

const AuthContext = React.createContext<TAuthContext>(initialValue);

export default AuthContext;