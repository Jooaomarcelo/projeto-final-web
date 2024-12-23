import Link from 'next/link';
import useLogin from '@/hooks/useLogin';
import { checkLoginCredentials } from '@/utils/checkCredentials';
import toast, { Toaster } from 'react-hot-toast';

export default function DropdownMenuUnlogged({ ref }) {
  const [userInputs, setUserInputs, errors, checkLogin] = useLogin();

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
        window.location.reload();
      } else {
        toast.error(ret.error);
      }
    }
  };

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className="absolute bg-[#2b4981] top-full mt-3 w-full flex flex-col items-center rounded-xl p-4"
      style={{ boxShadow: 'var(--shadow-dark)' }}
    >
      <div className="flex flex-col items-center mt-2 gap-2">
        <>
          <input
            className="w-full p-2 rounded-md text-black"
            type="email"
            placeholder="E-mail"
            name="email"
            value={userInputs.email}
            onChange={handleChange}
          />
          {errors && <p className="text-red-500">{errors.email}</p>}
        </>
        <>
          <input
            className="w-full mt-2 p-2 rounded-md text-black"
            type="password"
            placeholder="Senha"
            name="password"
            value={userInputs.password}
            onChange={handleChange}
          />
          {errors && <p className="text-red-500">{errors.password}</p>}
        </>
        <button className="bg-[#0000006b] text-white w-full rounded-full p-2 text-lg font-bold">Entrar</button>
        <span className="text-base  text-white font-normal">
          Novo aqui?{' '}
          <Link href="/signup" className="text-base  text-white font-normal underline">
            Criar conta
          </Link>
        </span>
      </div>
      <Toaster></Toaster>
    </form>
  );
}
