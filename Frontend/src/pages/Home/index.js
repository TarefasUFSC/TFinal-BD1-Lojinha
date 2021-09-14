import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";
import api from "../../services/api";
import Produtos from "../listProdItem";
import Header from "../Header";

export default function Home() {
  const [categorias, setCategorias] = useState([]);
  const id = localStorage.getItem("reqid");
  const [items, setItems] = useState([]);
  const history = useHistory();
  const [filtroCategoria, setfiltroCategoria] = useState("");
  const [filtroBusca, setfiltroBusca] = useState("");
  const [filtroQuantidade, setfiltroQuantidade] = useState(10);
  const [totalItens, setTotalItens] = useState();
  let data = "";

  function handleClickCategoria(id) {
    if (id == filtroCategoria) setfiltroCategoria("");
    else setfiltroCategoria(String(id));
  }

  function handleInput(e) {
    setfiltroBusca(e.target.value);
  }

  useEffect(async () => {
    await api
      .get("/produto/categoria", {
        headers: {},
      })
      .then((response) => {
        setCategorias(response.data.response.Categorias);
      });
  }, []);

  useEffect(async () => {
    await BuscaProdutos()
  }, []);

  useEffect(async () => {
    BuscaProdutos();
  }, [filtroCategoria]);

  useEffect(async () => {
    BuscaProdutos();
  }, [filtroBusca]);

  async function BuscaProdutos() {
    await api
      .get("/produto", {
        headers: {
          busca: filtroBusca,
          categorias: filtroCategoria,
          quantidade: filtroQuantidade,
        },
      })
      .then((response) => {
        setItems(response.data.response.Produtos);
        setTotalItens(parseInt(response.data.response.Total));
        console.log(items.length);
        console.log(totalItens);
      });
  }
  useEffect(async () => {
    await BuscaProdutos();
  }, [filtroQuantidade]);
  async function handleGetMais() {
    await setfiltroQuantidade(filtroQuantidade + 10);
  }
  function handleClickProduto(id) {
    history.push("produto/" + String(id));
  }

  return (
    <div className="home-container">
      <Header />
      <div className="home-data-container">
        <div className="home-categorias-container">
          <p>
            <b>Categorias:</b>
          </p>
          <ul>
            {categorias ? (
              categorias.map((categoria) => (
                <li
                  onClick={() => {
                    handleClickCategoria(categoria.id_Categoria);
                  }}
                  key={categoria.id_Categoria}
                >
                  <div
                    style={{
                      backgroundColor:
                        categoria.id_Categoria == filtroCategoria
                          ? "#606060"
                          : "white",
                    }}
                    className=""
                  >
                    <p>
                      <b>{categoria.nome_categoria}</b>
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <p>Sem categorias</p>
            )}
          </ul>
        </div>
        <div className="home-itens-container">
          <div className="home-filter-container">
            <input
              onChange={handleInput}
              placeholder="Digite o termo da busca"
            />
          </div>
          <div className="home-itens-list-container">
            {items ? (
              items.map((item) => (
                <div
                  onClick={() => {
                    handleClickProduto(item.id_Produto);
                  }}
                  key={item.id_Produto}
                >
                  <Produtos
                    imagem={item.Imagem}
                    nome={item.Nome}
                    valor={String(item.Valor)}
                  />
                </div>
              ))
            ) : (
              <p>Não há nenhum item a venda</p>
            )}
          </div>
          {items.length != totalItens ? (
            <button
              style={{ margin: "40px 50px 0px" }}
              className="home-button-more"
              onClick={async () => {
                handleGetMais();
              }}
            >
              Mostrar mais
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
