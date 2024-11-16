"use client";

import useSignUp from "@/hooks/useSignUp";

export default function FormLogin(){
    const [name, setName, email, setEmail, password, setPassword, password2, setPassword2, number, setNumber, checkSignUp] = useSignUp();

    /*
    Description: function responsible for calling the verification function and preventing the form from submitting directly.
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        if(checkSignUp()){
            console.log(`Cadastrado com sucesso.`);
            //Axios.
        }else{
            //Error message.
        }
    }

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <h1 className="font-bold text-3xl text-center">Cadastre sua República</h1>
            <input type="text" placeholder="Nome: ex. Poquito Más" name="signName" className="input-user-form" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="E-mail" name="signEmail" className="input-user-form" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Senha" name="signPas" className="input-user-form" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" placeholder="Confirme a senha" name="sign2Pas" className="input-user-form" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
            <input type="number" placeholder="Whatsapp" name="signNumber" className="input-user-form" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button className="text-blue-950 text-3xl font-bold bg-white h-14 py-2 mt-4 rounded-full">Cadastrar</button>
            <a href="/" className="a-user-form">Entrar</a>
        </form>
    )
}