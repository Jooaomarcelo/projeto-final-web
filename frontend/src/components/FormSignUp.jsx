"use client";

import useSignUp from "@/hooks/useSignUp";

export default function FormLogin(){
    const [userInputs, setUserInputs, errors, checkSignUp] = useSignUp();

    /*
    Description: function responsible for changing the value of userInputs.
    */
    const handleChange = (e) => {
        setUserInputs({...userInputs, [e.target.name]: e.target.value});
    }

    /*
    Description: function responsible for calling the verification function and preventing the form from submitting directly.
    */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(await checkSignUp()){
            console.log(userInputs);
            //Contact server with axios.
        }
    }

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <h1 className="font-bold text-3xl text-center">Cadastre sua República</h1>
            <div>
                <input type="text" placeholder="Nome: ex. Poquito Más" name="name" className="input-user-form" value={userInputs.name} onChange={handleChange}/>
                {errors && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div>
                <input type="email" placeholder="E-mail" name="email" className="input-user-form" value={userInputs.email} onChange={handleChange}/>
                {errors && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div>
                <input type="password" placeholder="Senha" name="password" className="input-user-form" value={userInputs.password} onChange={handleChange}/>
                {errors && <p className="text-red-500">{errors.password}</p>}
            </div>
            <div>
                <input type="password" placeholder="Confirme a senha" name="password2" className="input-user-form" value={userInputs.password2} onChange={handleChange}/>
                {errors && <p className="text-red-500">{errors.password2}</p>}
            </div>
            <div>
                <input type="number" placeholder="Whatsapp" name="number" className="input-user-form" value={userInputs.number ?? ""} onChange={handleChange}/>
                {errors && <p className="text-red-500">{errors.number}</p>}
            </div>
            <button className="text-blue-950 text-3xl font-bold bg-white h-14 py-2 mt-4 rounded-full">Cadastrar</button>
            <a href="/" className="a-user-form">Entrar</a>
        </form>
    )
}