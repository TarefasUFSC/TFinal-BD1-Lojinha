import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.png';


export default function newIncident(props){
    const id = props.match.params.id;
    console.log(props);
    return(
    <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Logo"/>
                <h1>Hallo {id}</h1>
                <p>Descreva o caso e blablabla</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para o Perfil
                </Link>
            </section>
            <form>
                <input placeholder="Título do Caso"/>
                <textarea placeholder="Descricao"/>
                <input placeholder="Valor em Reais"/>
                <button className="button" type="submit">Cadastrar</button>
                <button className="button" type="submit">Cancelar</button>
            </form>
        </div>
    </div>
    );
}