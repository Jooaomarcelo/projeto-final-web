'use client';

import Link from "next/link";
import toast from "react-hot-toast";
import useLogin from '@/hooks/useLogin';
import { checkLoginCredentials } from "@/utils/checkCredentials";
import { useRouter } from "next/navigation";

export default function FormLogin() {
  const [userInputs, setUserInputs, errors, checkLogin] = useLogin();
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
    if (await checkLogin()) {
      /* Trying to login. */
      const ret = await checkLoginCredentials(userInputs);
      if (!ret) {
        router.push("/home"); //Home for now.
      } else {
        toast.error(ret.error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form h-[50%]">
      <div className="h-[20%] min-h-12">
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          className="input-user-form"
          value={userInputs.email}
          onChange={handleChange}
        />
        {errors && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="h-[20%] min-h-12">
        <input
          type="password"
          placeholder="Senha"
          name="password"
          className="input-user-form"
          value={userInputs.password}
          onChange={handleChange}
        />
        {errors && <p className="text-red-500">{errors.password}</p>}
      </div>
      <Link href="" className="a-user-form">Esqueceu senha?</Link>
      <button className="text-blue-950 text-3xl font-bold bg-white h-14 py-2 rounded-full">
        Entrar
      </button>
      <Link href="/signup" className="a-user-form">Novo aqui?</Link>
    </form>
  );
}
