'use client';

import useLogin from '@/hooks/useLogin';

export default function FormLogin() {
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
    <form onSubmit={handleSubmit} className="user-form">
      <div>
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
      <div>
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
      <a href="" className="a-user-form">
        Esqueceu senha?
      </a>
      <button className="text-blue-950 text-3xl font-bold bg-white h-14 py-2 rounded-full">
        Entrar
      </button>
      <a href="/signup" className="a-user-form">
        Novo aqui?
      </a>
    </form>
  );
}
