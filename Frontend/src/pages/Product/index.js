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
  const [escolhendoLista, setEscolhendoLista] = useState(false);
  const [listaDesj, setListaDesej] = useState();
  const [listasdeDes, setListasdeDes] = useState();

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
    carrinho = JSON.parse(carrinho);
    if (carrinho) {
      console.log(carrinho);
      let achou = false;
      for (let i in carrinho["carrinho"]) {
        let itCar = await carrinho["carrinho"][i];
        await console.log(carrinho["carrinho"][i]);
        if (id == carrinho["carrinho"][i]["id_Produto"]) {
          carrinho["carrinho"][i]["quantidade"] =
            (await carrinho["carrinho"][i]["quantidade"]) + parseInt(qtd);
          achou = true;
          console.log(carrinho);
          break;
        }
      }
      if (!achou) {
        carrinho["carrinho"].push({
          id_Produto: id,
          quantidade: parseInt(qtd),
        });
      }

      await localStorage.setItem("carrinho", JSON.stringify(carrinho));
    } else
      await localStorage.setItem(
        "carrinho",
        JSON.stringify({
          carrinho: [{ id_Produto: id, quantidade: parseInt(qtd) }],
        })
      );
    alert("Adicionado " + String(qtd) + " ao seu carrinho");
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
  async function handleBtnAdicionaLista() {
    setEscolhendoLista(true);
    try {
      await api
        .get("/user/lista/" + String(userId), {
          headers: {
            reqid: String(userId),
            reqtype: String(userType),
          },
        })
        .then((response) => {
          setListasdeDes(response.data.Listas);
        });
    } catch (err) {
      alert(err.response.data.Erro);
    }
  }
  return (
    <div className="produto-container">
      {escolhendoLista ? (
        <div className="escolhe-lista-container">
          <div className="listas-container">
            <p style={{ fontSize: "20pt" }}>
              <b>Listas de Desejo</b>
            </p>
            {listasdeDes ? (
              listasdeDes.map((itLis) => (
                <div key={itLis.id_ListaDeDesejo} className="lista-data-container">
                  <div className="lista-nome-container">
                    <p style={{ fontSize: "16pt" }}>{itLis.nome}</p>
                  </div>
                  <div className="add-lista-btn-container">
                    <button
                      className="produto-comprar-button"
                      onClick={() => {}}
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
            <div className="btn-cancelar-lista-container">
              <button className="produto-lista-button" onClick={() => {}}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
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
            <button
              className="produto-comprar-button"
              onClick={() => {
                handleBuy(id, qtd);
              }}
            >
              Add no Carrinho
            </button>
            <button
              className="produto-lista-button"
              onClick={() => {
                handleBtnAdicionaLista();
              }}
            >
              Adicionar a Lista
            </button>
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
