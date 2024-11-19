'use client';

import useLogin from '@/hooks/useLogin';

export default function DropdownMenu({ ref }) {
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
    if (await checkLogin()) {
      console.log(userInputs);
      //Contact server with axios.
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
        <a className="text-base font-normal hover:underline" href="#">
          Esqueceu senha?
        </a>
        <button className="bg-[#0000006b] w-full rounded-full p-2 text-lg font-bold">
          Entrar
        </button>
        <a className="text-base font-normal hover:underline" href="/signup">
          Novo aqui?
        </a>
      </div>
    </form>
  );
}
