import React, { useState, useEffect } from "react";
import { Link, Switch, useHistory } from "react-router-dom";
import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import Coments from "../Coments";
import Header from "../Header";
import "./styles.css";

export default function Produto(props) {
  const id = props.match.params.id;
  const [titulo, setTitulo] = useState("");
  const [nota, setNota] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [img, setImg] = useState("");
  let [qtd, setQtd] = useState(1);
  let [estoque, setEstoque] = useState();
  const [userId, setuserId] = useState({});
  const [userType, setuserType] = useState("");
  const [comentario, setComentario] = useState();
  const [com, setCom] = useState([]);
  const [userNota, setUserNota] = useState(0);

  const history = useHistory();

  useEffect(async () => {
    await setuserId(localStorage.getItem("reqid"));
    await setuserType(localStorage.getItem("reqtype"));
    await getProduto();
    await getComentarios();
  }, []);

  async function getComentarios() {
    try {
      await api
        .get("/produto/comentario/" + String(id), {
          headers: {},
        })
        .then((response) => {
          setCom(response.data.Comments);
          console.log(response.data);
        });
    } catch (err) {
      alert(err.response.data.Erro);
    }
  }

  function handleRedirect() {
    history.push("/login");
  }

  async function handleBuy(id, qtd) {
    let carrinho = await localStorage.getItem("carrinho");
    if (carrinho) {
      carrinho = carrinho.split(",");
      console.log(carrinho);
      let achou = false;
      for (let i in carrinho) {
        let itCar = carrinho[i].split(":");
        console.log(itCar);
        if (id == itCar[0]) {
          itCar[1] = await String(parseInt(itCar[1]) + parseInt(qtd));
          carrinho[i] = (await itCar[0]) + ":" + itCar[1];
          achou = true;
          console.log(itCar);
          console.log(carrinho);
          break;
        }
      }
      if (!achou) {
        carrinho.push([String(id) + ":" + String(qtd)]);
      }
      let saveCar = "";
      for (let i in carrinho) {
        saveCar = saveCar + carrinho[i];
        if(i!=carrinho.length-1){
          saveCar = saveCar + ',';
        }
      }

      await localStorage.setItem("carrinho", saveCar);
      console.log(saveCar);
    }else
    await localStorage.setItem("carrinho", id + ":" + String(qtd));
  }

  async function getProduto() {
    try {
      await api.get("/produto/" + String(id), {}).then((response) => {
        setEstoque(response.data.Detalhes[0].Quantidade);
        setTitulo(response.data.Detalhes[0].Nome);
        setNota(response.data.Detalhes[0].media);
        setPreco(response.data.Detalhes[0].Valor);
        setDescricao(response.data.Detalhes[0].Descricao);
        setImg(response.data.Detalhes[0].Imagem);
      });
    } catch (err) {
      alert(err.response.data.Erro);
    }
  }

  async function handleSubmitComentario() {
    try {
      const data = {
        id_cliente: userId,
        comentario: comentario,
        nota: userNota,
      };
      console.log(data);
      await api.put("/produto/comentario/" + String(id), data);
      setComentario("");
      setUserNota(0);
      getComentarios();
      getProduto();
    } catch (err) {
      alert(err.response.data.Erro);
    }
  }

  function handleIncrease() {
    if (qtd < estoque) setQtd(qtd + 1);
  }
  function handleDecrease() {
    if (qtd != 1) setQtd(qtd - 1);
  }

  return (
    <div className="produto-container">
      <Header />
      <div className="produto-info-container">
        <div className="produto-img-desc-container">
          <div className="produto-img-container">
            <img
              className="produto-img"
              src={img ? "data:image/png;base64," + img : logoImg}
            />
          </div>
          <div className="produto-desc">
            <p>{descricao}</p>
          </div>
        </div>
        <div className="produto-valor-botoes-container">
          <div className="produto-titulo">
            <p>
              <b>{titulo}</b>
            </p>
          </div>
          <div className="produto-preco">
            <p>Preço: R$ {preco}</p>
          </div>
          <div className="produto-qtd-container">
            <div className="produto-qtd">
              <p>Quantidade: {qtd}</p>
            </div>
            <div className="produto-botoes">
              <button onClick={handleIncrease} className="produto-qtd-button">
                +
              </button>
              <button onClick={handleDecrease} className="produto-qtd-button">
                -
              </button>
            </div>
          </div>
          <div className="produto-comprar">
            {userId ? (
              <button
                className="produto-comprar-button"
                onClick={() => {
                  handleBuy(id, qtd);
                }}
              >
                Comprar
              </button>
            ) : (
              <button
                className="produto-comprar-button"
                onClick={handleRedirect}
              >
                Comprar
              </button>
            )}
          </div>
          <div className="produto-nota">
            <p>
              Nota:{" "}
              {nota != undefined || nota != null
                ? nota
                : "Nenhuma nota registrada. Seja o primeiro a avaliar"}
            </p>
          </div>
          {userId ? (
            <div className="create-comentario-container">
              <label for="comentario_input">Escreva seu comentário:</label>
              <textarea
                className="produto-comentario-textarea"
                id="comentario_input"
                name="comentario"
                rows="4"
                cols="50"
                placeholder="Escreva seu comentario aqui"
                value={comentario}
                onChange={(e) => {
                  setComentario(e.target.value);
                }}
              ></textarea>
              <input
                min="0"
                max="10"
                type="number"
                placeholder="Dê sua nota aqui (0-10):"
                value={userNota}
                onChange={(e) => {
                  setUserNota(e.target.value);
                }}
              ></input>
              <button
                style={{ marginLeft: "194px" }}
                className="produto-qtd-button"
                onClick={() => {
                  handleSubmitComentario();
                }}
              >
                Comentar
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {id ? <Coments com={com} setCom={setCom} id={id} /> : <p>Loading</p>}
    </div>
  );
}
