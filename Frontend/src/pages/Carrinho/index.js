import React, { useState, useEffect } from "react";
import { Link, Switch, useHistory } from "react-router-dom";
import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import Header from "../Header";
import "./styles.css";

export default function Carrinho(props) {
  const [carrinho, setCarrinho] = useState([]);
  const [itens, setItens] = useState([]);
  const [total, setTotal] = useState();
  useEffect(async () => {
    getCarrinho();
  }, []);
  async function getProduto(id) {
    try {
      const response = await api.get("/produto/" + String(id), {});
      return response.data.Detalhes[0];
    } catch (err) {
      return null;
    }
  }
  useEffect(async () => {
    let its = [];
    for (let i in carrinho) {
      console.log(carrinho[i][0]);
      let it = await getProduto(carrinho[i][0]);
      its.push([it, carrinho[i][1]]);
    }
    await setItens(its);
    console.log(its);
  }, [carrinho]);
  useEffect(async () => {
    getTotal();
  }, [itens]);

  async function getCarrinho() {
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
  async function getTotal() {
    let tot = 0;
    for (let i in itens) {
      let it = itens[i];
      tot = tot + parseFloat(it[0].Valor) * parseInt(it[1]);
      console.log(tot);
    }
    console.log(tot);
    setTotal(parseInt(tot * 100) / 100);
  }
  return (
    <div className="carrinho-container">
      <Header />
      <div className="carrinho-content-container">
        <div className="carrinho-itens-container">
          <div className="carrinho-title-container">
            <p>
              <b>Carrinho</b>
            </p>
          </div>
          {itens ? (
            itens.map((it) => (
              <div className="carrinho-itemdata-container">
                <div className="carrinho-item-img-container">
                  <img
                    className="carrinho-item-img"
                    src={
                      it[0].Imagem
                        ? "data:image/png;base64," + it[0].Imagem
                        : logoImg
                    }
                  ></img>
                </div>
                <div className="item-name-container">
                  <p>{it[0].Nome}</p>
                </div>
                <div className="item-stats-container">
                  <div className="produto-qtd-container">
                    <div className="produto-qtd">
                      <p>Quantidade: {it[1]}</p>
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
                    <p>Preco: R${it[0].Valor}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Vazio</p>
          )}
        </div>
        <div className="carrinho-resumo-container">
          <div className="carrinho-dados-resumo">
            <div className="carrinho-title-container">
              <p>Resumo</p>
            </div>
            <div className="carrinho-itens-preco-final">
              {itens ? (
                itens.map((it) => (
                  <div className="it-preco">
                    <p>{it[0].Nome}</p>
                    <p>R${parseFloat(it[0].Valor) * parseInt(it[1])}</p>
                  </div>
                ))
              ) : (
                <p>Vazio</p>
              )}
            </div>
            <div className="carrinho-total-container">
              <p>Total: R${total ? total : "0"}</p>
            </div>
          </div>
            <div className="resumo-complemento"></div>
        </div>
      </div>
    </div>
  );
}
