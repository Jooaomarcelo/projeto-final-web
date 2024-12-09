'use client';

import Link from 'next/link';
import useSignUp from '@/hooks/useSignUp';
import { checkSignUpCredentials } from '@/utils/checkCredentials';
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";

export default function FormLogin() {
  const [userInputs, setUserInputs, errors, setErrors, checkSignUp] = useSignUp();
  const router = useRouter();

  /*
  Description: function responsible for changing the value of userInputs.
  */
  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  /*
  Description: function responsible for calling the verification function and preventing the form from submitting directly.
  */
  const handleSubmit = async (e) => {
    e.preventDefault();
    /* Checking inicial inputs. */
    if (await checkSignUp()) {
      /* Trying to create new fraternity. */
      const ret = await checkSignUpCredentials(userInputs);
      if (!ret) {
        toast.success("República cadastrada com sucesso.");
        router.push('/login');
      } else {
        if (ret.error == 'Esse usuário já existe!') {
          setErrors({ name: ret.error });
        } else {
          toast.error(ret.error);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form h-[80%]">
      <h1 className="font-bold text-3xl text-center">Cadastre sua República</h1>
      <div className="h-[12%] min-h-12">
        <input
          type="text"
          placeholder="Nome: ex. Poquito Más"
          name="name"
          className="input-user-form "
          value={userInputs.name}
          onChange={handleChange}
        />
        {errors && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="h-[12%] min-h-12">
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          className="input-user-form "
          value={userInputs.email}
          onChange={handleChange}
        />
        {errors && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="h-[12%] min-h-12">
        <input
          type="password"
          placeholder="Senha"
          name="password"
          className="input-user-form "
          value={userInputs.password}
          onChange={handleChange}
        />
        {errors && <p className="text-red-500">{errors.password}</p>}
      </div>
      <div className="h-[12%] min-h-12">
        <input
          type="password"
          placeholder="Confirme a senha"
          name="password2"
          className="input-user-form "
          value={userInputs.password2}
          onChange={handleChange}
        />
        {errors && <p className="text-red-500">{errors.password2}</p>}
      </div>
      <div className="h-[12%] min-h-12">
        <input
          type="number"
          placeholder="Whatsapp"
          name="number"
          className="input-user-form "
          value={userInputs.number ?? ''}
          onChange={handleChange}
        />
        {errors && <p className="text-red-500 ">{errors.number}</p>}
      </div>
      <button className="text-blue-950 text-3xl font-bold bg-white h-14 py-2 mt-4 rounded-full">Cadastrar</button>
      <Link href="/login" className="a-user-form">
        Entrar
      </Link>
    </form>
  );
}
