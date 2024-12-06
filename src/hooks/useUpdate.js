"use client";

import { useState } from 'react';
import * as yup from 'yup';

/* 
Description: scheme, from yup, for checking user inputs in update.
*/
const scheme = yup.object().shape({
    description: yup.string().required("Sua república precisa de uma descrição."),
    address: yup.object().shape({
        cep: yup.number()
            .nullable()
            .transform((value, originalValue) => {
                return originalValue === "" ? null : value;
            })
            .integer("Informe um cep válido.")
            .min(1, "Informe um cep válido.")
            .required("É necessário informar o cep."),
        res_number: yup.number()
            .nullable()
            .transform((value, originalValue) => {
                return originalValue === "" ? null : value;
            })
            .integer("Informe um número residencial válido.")
            .min(1, "Informe um número residencial válido..")
            .required("É necessário informar o número residencial.")
    }),
    capacity: yup.number()
        .nullable()
        .transform((value, originalValue) => {
            return originalValue === "" ? null : value;
        })
        .integer("A capacidade deve ser um número inteiro.")
        .min(1, "A capacidade deve ser no mínimo 1.")
        .required("É necessário informar a capacidade de moradores."),
    min_price: yup.number()
        .nullable()
        .transform((value, originalValue) => {
            return originalValue === "" ? null : value;
        })
        .min(1, "O preço mínimo deve ser no mínimo 1.")
        .required("É necessário informar o preço mínimo."),
    max_price: yup.number()
        .nullable()
        .transform((value, originalValue) => {
            return originalValue === "" ? null : value;
        })
        .moreThan(yup.ref("min_price"), "O preço máximo deve ser maior que o preço mínimo.")
        .required("É necessário informar o preço máximo."),
});

export default function useUpdate(fraternity) {
    const [initialData, setInitialData] = useState(fraternity);
    const [errors, setErrors] = useState({});

    /*
    Description: function responsible for checking fraternity update (empty fields, incorret formats, ...). 
    */
    const checkUpdate = async () => {
        try {
            /* Checking inputs. */
            await scheme.validate(initialData, { abortEarly: false });
            /* Setting errors to empty. */
            setErrors({});
            return true;
        } catch (e) {
            /* Checking errors. */
            const errorMessages = {};
            e.inner.forEach((error) => {
                if (error.path === "address.cep") {
                    errorMessages["cep"] = error.message;
                } else if (error.path === "address.res_number") {
                    errorMessages["res_number"] = error.message;
                } else {
                    errorMessages[error.path] = error.message;
                }
            });
            /* Setting errors. */
            setErrors(errorMessages);
            return false;
        }
    };

    return [initialData, setInitialData, errors, checkUpdate];
}