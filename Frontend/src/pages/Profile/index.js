import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';
import Header from '../Header';

import logoImg from '../../assets/logo.png';

export default function Profile(){
    //const [incidents, setIncidents] = useState([]);

    const [userId, setuserId] = useState();
    const [userType, setuserType] = useState("");
    const [senha, setSenha] = useState();
    const [confirmaSenha, setconfirmaSenha] = useState();
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [img, setImg] = useState();

    const history = useHistory();

    async function handleUpdateData(e) {
        e.preventDefault();
        if(!userId) return;
        let path = "";
        const Nome = nome;
        const ImagemPerfil = img;
        let data;
        if(senha){
            if(senha != confirmaSenha){
                alert("Senhas não batem");
                return;
            }
            data = {Nome, email, senha, ImagemPerfil};
        }
        else data = {Nome, email, ImagemPerfil};
        try {
            path="/user/cliente/" + String(userId);
            const response = await api.post(path, data, {
                headers:{
                    reqid: userId,
                    reqtype: String(userType)
                }});
            alert(`Dados atualizados`);
            console.log("RESPONSE KLR: " + response);
        } catch (err) {}
      }

    function handleLogOut(){
        localStorage.clear();
        history.push('/');
    }
    
    useEffect(async () => {
        await setuserId(localStorage.getItem("reqid"));
        await setuserType(localStorage.getItem("reqtype"));
      }, []);

    useEffect(async () => {
        const response = await api.get(`/user/${userId}`, {
            headers: {
              cliente: userType == "0" ? "1" : "0",
              fornecedor: userType,
              reqid: userId,
              reqtype: String(userType),
            },
          });
          var rdata; 
          if(userType=='0') rdata = response.data.Cliente[0];
          else rdata = response.data.Fornecedor[0];
          setImg(rdata.ImagemPerfil);
          setNome(rdata.Nome);
          setEmail(rdata.email);
        }, [userType]);
    
    async function handleChangeImg(e){
        console.log(e)
        try{
        var file = e.target.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
        reader.onloadend = function (event) {
            console.log(reader.result.split(","));
            setImg(reader.result.split(",")[1]);
          }.bind(this);
        console.log(url)
        } catch (err){}
    }

    return(
        <div className="profile-container">
            <Header/>
            <div className="profile-body">
                <div className="profile-options">
                    <button className="profile-opt-button">Dados</button>
                    <button className="profile-opt-button">Compras</button>
                    <button className="profile-opt-button">Pagamento</button>
                    <button className="profile-opt-button2" onClick={()=>{handleLogOut()}} >Log Out</button>
                </div>
                <div className="profile-data-container">
                    <div className="profile-user-data-container">
                    <form onSubmit={handleUpdateData}>
                            <input 
                                value={nome}
                                placeholder="Nome"
                                onChange={(e) => setNome(e.target.value)} 
                            />
                            <input
                                value={email} 
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />   
                            <input
                                value={senha}
                                id="password"
                                type="password"
                                placeholder="Nova Senha" 
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <input
                                value={confirmaSenha}
                                id="confirm_password"
                                type="password"
                                placeholder="Confirme Nova Senha"
                                onChange={(e) => setconfirmaSenha(e.target.value)}
                            />
                            <button className="profile-opt-button" type="submit">Salvar</button>
                        </form>
                    </div>
                    <div className="profile-user-img-container">
                        <img className="profile-user-img" 
                            src={img?"data:image/png;base64," + img: logoImg}/>
                        <input 
                            className="profile-opt-button2"
                            type="file" 
                            name="user[image]" 
                            multiple="true"
                            onChange={handleChangeImg}/>
                    </div>
                </div>
            </div>
        </div>
    )
}