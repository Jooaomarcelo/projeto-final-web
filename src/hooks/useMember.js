'use client';

import { useState } from 'react';
import * as yup from 'yup';

const scheme = yup.object().shape({
  name: yup
    .string()
    .required('Nome obrigatório.')
    .matches(/^[^0-9]*$/, 'Nome não pode conter números.'),
  nickname: yup
    .string()
    .required('Apelido obrigatório.')
    .matches(/^[^0-9]*$/, 'Nome não pode conter números.'),
});

export default function useMember(member) {
  const [initialData, setInitialData] = useState(member);
  const [errors, setErrors] = useState({});

  const checkMember = async () => {
    try {
      await scheme.validate(initialData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error) {
      console.log(error);
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });

      setErrors(errors);
      return false;
    }
  };

  return [initialData, setInitialData, errors, checkMember];
}
