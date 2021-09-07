import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

import './styles.css';

import logoImg from '../../assets/logo.png';
import vertical from '../../assets/vertical.png';

export default function Login(){
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');


    async function handleLogin(e){
        e.preventDefault();

        const data = {
            email,
            senha
        }
        try{
            console.log(await api.post('/login', data))
            alert(`Login efetuado com sucesso`)
        }catch (err){
            alert(`Deu ruim`)
        }
    }

    return(
        <div className="login-container">
            <div className="login-img-container">
                <img className="logo-img" height="300px" width="auto" src={logoImg} alt="Logo"/>
            </div>
            <div>
                <img className="login-vertical" src={vertical} alt="Line"/>
            </div>
            <div className="login-data-container">
                <div className="login-title-container">
                    <p><b>Login</b></p>
                </div>
                <div className="login-form-container">
                    <form onSubmit={handleLogin}>
                        <input 
                            type="email" placeholder="Email"
                            value = {email} 
                            onChange = {e=>setEmail(e.target.value)}
                        />
                        <input
                            type="password" placeholder="Senha"
                            value = {senha} 
                            onChange = {e=>setSenha(e.target.value)}
                        />
                        <div className="login-button-container">
                            <Link to="/register">
                                <div className="login-myButton"> Registre-se</div>
                            </Link>
                            <button className="login-myButton2">Login</button>                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}