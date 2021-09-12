import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import Header from "../Header";
import "./styles.css";

export default function Produto(props) {
  let [qtd, setQtd] = useState(1);
  
  function handleIncrease(){
      setQtd(qtd+1);
  }
  function handleDecrease(){
      if(qtd!=1) setQtd(qtd-1);
  }

  const id = props.match.params.id;
  return (
    <div className="produto-container">
      <Header />
      <div className="produto-info-container">
        <div className="produto-img-desc-container">
          <div className="produto-img-container">
            <img className="produto-img" src={logoImg} />
          </div>
          <div className="produto-desc">
            <p>TESTE</p>
          </div>
        </div>
        <div className="produto-valor-botoes-container">
          <div className="produto-titulo">
            <p><b>Titulo</b></p>
          </div>
          <div className="produto-preco">
            <p>Preco</p>
          </div>
          <div className="produto-qtd-container">
            <div className="produto-qtd">
              <p>Quantidade: {qtd}</p>
            </div>
            <div className="produto-botoes">
              <button onClick={handleIncrease} className="produto-qtd-button">+</button>
              <button onClick={handleDecrease} className="produto-qtd-button">-</button>
            </div>
          </div>
          <div className="produto-comprar">
            <button className="produto-comprar-button">Comprar</button>
          </div>
          <div className="produto-nota">
            <p>NOTA 0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
