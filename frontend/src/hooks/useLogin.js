"use client"

import { useState } from "react";

export default function useLogin(){
    const [email, setEmail] = useState(""); //Login email.
    const [password, setPassword] = useState(""); //Login password.

    /*
    Description: function responsible for checking user login (empty fields, incorret formats, ...). 
    */
    const checkLogin = () => {
        console.log("E-mail: ", email);
        console.log("Senha: ", password);

        return true;
    }

    return [email, setEmail, password, setPassword, checkLogin];
}