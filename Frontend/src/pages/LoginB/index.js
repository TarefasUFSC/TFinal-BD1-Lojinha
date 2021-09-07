import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

//<button className="button" type="submit" href="/register">Registrar</button>
import './styles.css';

import logoImg from '../../assets/logo.png';
import heroesImg from '../../assets/heroes.png';

export default function LoginB(){
    return(
        <div className="logon-container">
            <section className="from">
                <img src={logoImg} alt="Logo"/>
                <form justify-content="center" display="flex"> 
                    <h1>Fazer Login</h1>
                    <input placeholder="Seu email"/>
                    <div className="actionButtons">
                        <button className="button" type="submit">Entrar</button>
                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color="#e02041"/>
                            Não tenho cadastro
                        </Link>
                    </div>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}