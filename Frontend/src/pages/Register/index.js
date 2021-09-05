import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Register(){
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[Whatsapp, setWhatsapp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            Whatsapp,
            city,
            uf
        }
        try{
            const response = await api.post('ongs', data)

            alert(`Seu ID de acesso: ${response.data.id}`);
        } catch (err){
            alert('Erro no cadastro, tente novamente.')
        }
    }
    
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro e blablabla</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para o Login
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />

                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                   
                    <input
                        placeholder="WhatsApp"
                        value={Whatsapp}
                        onChange={e=>setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={e=>setCity(e.target.value)}
                        />
                        
                        <input
                            placeholder="UF"
                            style={{width:80}}
                            value={uf}
                            onChange={e=>setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">CADASTRAR</button>
                </form>
            </div>
        </div>
    );
}