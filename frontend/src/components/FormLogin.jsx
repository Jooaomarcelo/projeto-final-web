"use client";

import useLogin from "@/hooks/useLogin";

export default function FormLogin(){
    const [email, setEmail, password, setPassword, checkLogin] = useLogin();

    /*
    Description: function responsible for calling the verification function and preventing the form from submitting directly.
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        if(checkLogin()){
            console.log("Logado com sucesso.");
            //Contact server with axios.
        }else{
            //Show error message.
        }
    }

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <input type="email" placeholder="E-mail" name="loginEmail" className="input-user-form" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Senha" name="loginPas" className="input-user-form" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <a href="" className="a-user-form">Esqueceu senha?</a>
            <button className="text-blue-950 text-3xl font-bold bg-white h-14 py-2 rounded-full">Entrar</button>
            <a href="/signup" className="a-user-form">Novo aqui?</a>
        </form>
    )
}