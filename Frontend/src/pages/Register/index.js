import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.png";
import vertical from "../../assets/vertical.png";

//()=>{alert('Registrou-se')}

export default function Resgister() {
  const [Nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [confirma, setConfirma] = useState("");
  const [cargo, setCargo] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    let path = "";
    const data = {
      Nome,
      email,
      Senha,
      confirma,
      cargo,
    };
    if (data.cargo === "") {
      alert(`Cargo não selecionado`);
    } else {
      if (data.Senha !== data.confirma) alert(`As senhas não batem`);
      else {
        console.log(data);
        if (data.cargo === "Comprador") path = "registro/cliente";
        else path = "registro/cliente";
        try {
          const response = await api.put(path, data);
          alert(`Registrou-se`);

          history.push("/login");
        } catch (err) {
          alert(`Deu ruim`);
        }
      }
    }
  }
  return (
    <div className="register-container">
      <div className="register-img-container">
        <img
          className="logo-img"
          height="300px"
          width="auto"
          src={logoImg}
          alt="Logo"
        />
      </div>
      <div>
        <img className="register-vertical" src={vertical} alt="Line" />
      </div>
      <div className="register-data-container">
        <div className="register-title-container">
          <p>
            <b>Registro</b>
          </p>
        </div>
        <div className="register-form-container">
          <form onSubmit={handleRegister}>
            <input
              placeholder="Nome"
              value={Nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={Senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirme a senha"
              value={confirma}
              onChange={(e) => setConfirma(e.target.value)}
            />
            <div className="register-checkbox-container">
              <input
                className="checkbox-radio"
                type="radio"
                name="opcao"
                value="Comprador"
                onChange={(e) => setCargo("Comprador")}
              />
              <label className="label-radio">Comprador</label>
              <input
                className="checkbox-radio"
                type="radio"
                name="opcao"
                value="Vendedor"
                onChange={(e) => setCargo("Vendedor")}
              />
              <label className="label-radio">Vendedor</label>
            </div>
            <div className="register-button-container">
              <button className="register-myButton" type="submit">
                Registar
              </button>
              <Link to="/login">
                <div className="register-myButton2">Login</div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
