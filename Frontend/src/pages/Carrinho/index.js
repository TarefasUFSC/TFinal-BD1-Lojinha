import React, { useState, useEffect } from "react";
import { Link, Switch, useHistory } from "react-router-dom";
import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import Header from "../Header";
import "./styles.css";

export default function Carrinho(props) {
  const [carrinho, setCarrinho] = useState({});
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
    for (let i in carrinho["carrinho"]) {
      console.log(carrinho["carrinho"][i]["id_Produto"]);
      let it = await getProduto(carrinho["carrinho"][i]["id_Produto"]);
      its.push([it, carrinho["carrinho"][i]["quantidade"]]);
    }
    await setItens(its);
    console.log(its);
  }, [carrinho]);
  useEffect(async () => {
    getTotal();
  }, [itens]);

  async function getCarrinho() {
    let carr = await localStorage.getItem("carrinho");

    await setCarrinho(JSON.parse(carr));
  }
  async function handleIncrease(id) {
    console.log(id);
    console.log(carrinho);
    let auxCar = carrinho;
    let auxIt = itens;

    setItens("");
    for (let i in auxCar["carrinho"]) {
      if (id == auxCar["carrinho"][i]["id_Produto"]) {
        auxCar["carrinho"][i]["quantidade"] =
          (await auxCar["carrinho"][i]["quantidade"]) + 1;
        auxIt[i][1] = auxIt[0][1] + 1;
        if (auxCar["carrinho"][i]["quantidade"] > itens[i][0]["Quantidade"]) {
          auxCar["carrinho"][i]["quantidade"] = await itens[i][0]["Quantidade"];

          auxIt[i][1] = itens[i][0]["Quantidade"];
        }
      }
    }
    await localStorage.setItem("carrinho", JSON.stringify(auxCar));
    setCarrinho(auxCar);
    setItens(auxIt);
    console.log(itens);
  }
  async function handleDecrease(id) {
    console.log(id);
    let auxCar = carrinho;
    let auxIt = itens;
    setItens("");
    for (let i in auxCar["carrinho"]) {
      if (id == auxCar["carrinho"][i]["id_Produto"]) {
        auxCar["carrinho"][i]["quantidade"] =
          (await auxCar["carrinho"][i]["quantidade"]) - 1;
        auxIt[i][1] = auxIt[i][1] - 1;
        if (auxCar["carrinho"][i]["quantidade"] == 0) {
          auxCar["carrinho"].splice(i, 1);
          auxIt.splice(i, 1);
          break;
        }
      }
    }

    await localStorage.setItem("carrinho", JSON.stringify(auxCar));
    setCarrinho(auxCar);
    setItens(auxIt);
    console.log(itens);
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
  async function handleCompra() {
    try {
      let data = {
        id_Cliente: localStorage.getItem("reqid"),
        total: total,
        carrinho: carrinho["carrinho"],
      };
      let path = "/compra/new";
      const response = await api.put(path, data, {
        headers: {
          reqid: localStorage.getItem("reqid"),
          reqtype: localStorage.getItem("reqtype"),
        },
      });
      alert(`Compra Efetuada`);
      setItens([]);
      setCarrinho({"carrinho":[]})
      localStorage.setItem("carrinho",JSON.stringify({"carrinho":[]}))
      window.location.reload(); 
    } catch (err){
      alert(err.response.data.Erro);
  }
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
                        onClick={() => {
                          handleIncrease(it[0]["id_Produto"]);
                        }}
                        className="produto-qtd-button"
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          handleDecrease(it[0]["id_Produto"]);
                        }}
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
            <div className="carrinho-btn-comprar">
              <button
                onClick={() => {
                  handleCompra();
                }}
                className="produto-qtd-button"
              >
                Comprar
              </button>
            </div>
          </div>
          <div className="resumo-complemento"></div>
        </div>
      </div>
    </div>
  );
}
