"use client"

import { useState } from "react";
import * as yup from "yup";

/* 
Description: scheme, from yup, for checking user inputs in login.
*/
const scheme = yup.object().shape({
    email: yup.string().email("E-mail inválido.").required("É necessário informar o e-mail."),
    password: yup.string().min(4, "A senha deve conter no mínimo 4 caracteres.").required("É necessário informar a senha."),
});

export default function useLogin(){
    const [userInputs, setUserInputs] = useState({email: "", password: ""}); //User inputs (email, password).
    const [errors, setErrors] = useState({}); //Errors messages.

    /*
    Description: function responsible for checking user login (empty fields, incorret formats, ...). 
    */
    const checkLogin = async () => {
        try{
            /* Checking inputs. */
            await scheme.validate(userInputs, { abortEarly: false });
            /* Setting errors to empty. */
            setErrors({});
            return true;
        }catch(e){
            /* Checking errors. */
            const errorMessages = {};
            e.inner.forEach((error) => {
                errorMessages[error.path] = error.message;
            });
            /* Setting errors. */
            setErrors(errorMessages);
            return false;
        }
    }

    return [userInputs, setUserInputs, errors, checkLogin];
}