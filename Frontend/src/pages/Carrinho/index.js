import React, { useState, useEffect } from "react";
import { Link, Switch, useHistory } from "react-router-dom";
import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import Header from "../Header";
import "./styles.css";

export default function Carrinho(props) {
  const [carrinho, setCarrinho] = useState([]);
  useEffect(async () => {
    getCarrinho();
  }, []);
  async function getCarrinho(id, qtd) {
    let carr = await localStorage.getItem("carrinho");

    if (carr) {
      let auxCar = [];
      carr = carr.split(",");
      console.log(carr);
      let achou = false;
      for (let i in carr) {
        let itCar = await carr[i].split(":");
        await auxCar.push(itCar);
      }
      await console.log(auxCar);
      
      await setCarrinho(auxCar);
    }
    console.log(carrinho);
  }
  function handleIncrease() {
    //if (qtd < estoque) setQtd(qtd + 1);
  }
  function handleDecrease() {
    //if (qtd != 1) setQtd(qtd - 1);
  }
  return (
    <div className="carrinho-container">
      <Header />
      <div className="carrinho-content-container">
        <div className="carrinho-itens-container">
          <div className="carrinho-title-container">
            <p>Carrinho</p>
          </div>
          {carrinho ? carrinho.map((it) => <div className="carrinho-itemdata-container">
            <div className="carrinho-item-img-container">
              <img className="carrinho-item-img" src={logoImg}></img>
            </div>
            <div className="item-name-container">
              <p>Nome</p>
            </div>
            <div className="item-stats-container">
              <div className="produto-qtd-container">
                <div className="produto-qtd">
                  <p>Quantidade: {}</p>
                </div>
                <div className="produto-botoes">
                  <button
                    onClick={handleIncrease}
                    className="produto-qtd-button"
                  >
                    +
                  </button>
                  <button
                    onClick={handleDecrease}
                    className="produto-qtd-button"
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="carrinho-itempreco-container">
                <p>Preco</p>
              </div>
            </div>
          </div>
        ) : <p>Vazio</p>}
        </div>
        <div className="carrinho-resumo-container">
          <p>ok</p>
        </div>
      </div>
    </div>
  );
}
