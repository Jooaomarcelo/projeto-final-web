"use client"

import { useState } from "react";
import * as yup from "yup";

/* 
Description: scheme, from yup, for checking user inputs in signup.
*/
const scheme = yup.object().shape({
    name: yup.string().required("É necessário informar o nome da República."),
    email: yup.string().email("E-mail inválido.").required("É necessário informar o e-mail."),
    password: yup.string().min(4, "A senha deve conter no mínimo 4 caracteres.").required("É necessário informar a senha."),
    password2: yup.string().oneOf([yup.ref("password")], "As senhas devem ser iguais.").required("Confirme a senha."),
    number: yup
        .number()
        .nullable() //Allows null value.
        .transform((value, originalValue) => {return originalValue === "" ? null : value;}) //Transform the value to null if it's "".
        .integer("O número deve ser um inteiro.")
        .min(1000000000000, "Informe um número válido.")
        .max(9999999999999, "Informe um número válido.")
        .required("É necessário informar o número."),
});

export default function useSignUp(){
    const [userInputs, setUserInputs] = useState({name: "", email: "", password: "", password2: "", number: null}); //User inputs (email, password, ...).
    const [errors, setErrors] = useState({}); //Errors messages.

    /*
    Description: function responsible for checking user signup (empty fields, incorret formats, ...). 
    */
    const checkSignUp = async () => {
        try{
            /* Checking inputs. */
            await scheme.validate(userInputs, {abortEarly: false});
            /* Setting errors to empty. */
            setErrors({});
            return true;
        }catch(e){
            /* Checking errors. */
            const errorMessages = {};
            e.inner.forEach(error => {
                errorMessages[error.path] = error.message;
            });
            /* Setting errors. */
            setErrors(errorMessages);
            return false;
        }
    }

    return [userInputs, setUserInputs, errors, checkSignUp];
}