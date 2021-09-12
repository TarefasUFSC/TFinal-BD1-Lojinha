import React, { useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import Header from "../Header";
import "./styles.css";

export default function Produto(props) {
  const id = props.match.params.id;
  const [titulo, setTitulo] = useState('');
  const [nota, setNota] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [img, setImg] = useState('');
  let [qtd, setQtd] = useState(1);
  let [estoque, setEstoque] = useState();
  
  useEffect(async () => {
    await api.get("/produto/"+String(id), {}).then((response) => {
      setEstoque(response.data.Detalhes[0].Quantidade);
      setTitulo(response.data.Detalhes[0].Nome);
      setNota(response.data.Detalhes[0].media);
      setPreco(response.data.Detalhes[0].Valor);
      setDescricao(response.data.Detalhes[0].Descricao);
      setImg(response.data.Detalhes[0].Imagem);
    });
  }, []);

  function handleIncrease(){
    if(qtd<estoque) setQtd(qtd+1);
  }
  function handleDecrease(){
      if(qtd!=1) setQtd(qtd-1);
  }

  return (
    <div className="produto-container">
      <Header />
      <div className="produto-info-container">
        <div className="produto-img-desc-container">
          <div className="produto-img-container">
            <img className="produto-img"
                src={
                    img
                      ? "data:image/png;base64," + img
                      : logoImg
                  }
                />
          </div>
          <div className="produto-desc">
            <p>{descricao}</p>
          </div>
        </div>
        <div className="produto-valor-botoes-container">
          <div className="produto-titulo">
            <p><b>{titulo}</b></p>
          </div>
          <div className="produto-preco">
            <p>Preço: R$ {preco}</p>
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
            <p>Nota: {nota}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
