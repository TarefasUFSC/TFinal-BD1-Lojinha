import React from 'react';
import {Link} from 'react-router-dom';

//<button className="button" type="submit" href="/register">Registrar</button>
import './styles.css';

import logoImg from '../../assets/logo.png';
//import heroesImg from '../../assets/heroes.png';

export default function Login(){
    return(
        <div className="home-container">
            <header className="home-header-container"> 
                <img src={logoImg} alt="Logo"/>
                <span>Lojinha Gourmet</span>
                <Link className="back-link" to="/register">
                    Carrinho
                </Link>
                <Link className="back-link" to="/register">
                    Não tenho cadastro
                </Link>
            </header>
            <div className="home-data-container">

            </div>
        </div>
    );
}

/*
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
*/