"use client"

import { useState } from "react";

export default function useSignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [number, setNumber] = useState(0);

    /*
    Description: function responsible for checking user signup (empty fields, incorret formats, ...). 
    */
    const checkSignUp = () => {
        console.log(`Nome: ${name}`);
        console.log(`E-mail: ${email}`);
        console.log(`Senha: ${password}`);
        console.log(`Senha2: ${password2}`);
        console.log(`Número: ${number}`);

        return true;
    }

    return [name, setName, email, setEmail, password, setPassword, password2, setPassword2, number, setNumber, checkSignUp];
}