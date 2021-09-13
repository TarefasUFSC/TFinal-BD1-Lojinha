import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";
import api from "../../services/api";

import logoImg from "../../assets/logo.png";

export default function ProfileLists() {
  const [userId, setuserId] = useState();
  const [userType, setuserType] = useState("");

  const [listasdeDes, setListasdeDes] = useState();
  const [listData, setListData] = useState();
  const [selectedList, setSelectedList] = useState();
  const history = useHistory();

  useEffect(async () => {
    await setuserId(localStorage.getItem("reqid"));
    await setuserType(localStorage.getItem("reqtype"));
  }, []);

  useEffect(async () => {
    if (selectedList) {
      try {
        await api
          .get("/user/lista/" + String(userId), {
            headers: {
              reqid: String(userId),
              reqtype: String(userType),
              idlista: String(selectedList),
            },
          })
          .then((response) => {
            setListData(response.data.Produtos);
          });
      } catch (err) {
        alert(err.response.data.Erro);
      }
    }
  }, [selectedList]);

  useEffect(async () => {
    if (userId && userType) {
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
  }, [userType]);
  async function handleRemover(idp){
    try {
        await api
          .delete("/user/lista/" + String(userId) ,{
            headers: {
              reqid: String(userId),
              reqtype: String(userType),
            },
            data:{"id_Lista":selectedList,"id_Produto":idp}
          })
          .then(async (response) => {
              let aux = selectedList;
            await setSelectedList();
            await setSelectedList(aux);
            alert(response.data.response)
          });
      } catch (err) {
        alert(err.response.data.Erro);
      }
  }
  return (
    <div className="profile-list-container">
      {listasdeDes ? (
        listasdeDes.map((itLis) => (
          <div
            key={itLis.id_ListaDeDesejo}
            className="list-data-hole-container"
          >
            <div className="lista-data-container">
              <div className="lista-nome-container">
                <p style={{ fontSize: "16pt" }}>{itLis.nome}</p>
              </div>
              <div className="add-lista-btn-container">
                {itLis.id_ListaDeDesejo != selectedList ? (
                  <button
                    className="produto-comprar-button"
                    onClick={() => {
                      setSelectedList(itLis.id_ListaDeDesejo);
                    }}
                  >
                    show
                  </button>
                ) : (
                  <>
                    <button
                      className="produto-comprar-button"
                      onClick={() => {
                        setSelectedList();
                      }}
                    >
                      hide
                    </button>
                  </>
                )}
              </div>
            </div>
            {selectedList == itLis.id_ListaDeDesejo && listData ? (
              <div className="selected-list-data-container">
                {listData.map((ldt) => (
                  <div className="list-prod-container">
                    <div className="carrinho-item-img-container">
                      <img
                        className="carrinho-item-img"
                        src={
                          ldt.Imagem
                            ? "data:image/png;base64," + ldt.Imagem
                            : logoImg
                        }
                      ></img>
                    </div>
                    <div className="item-name-container">
                      <p>{ldt.Nome}</p>
                    </div>
                    <div className="item-stats-container">
                      <div className="produto-qtd-container">
                        <div className="produto-qtd">
                          <p>Estoque: {ldt.Quantidade}</p>
                        </div>
                        <div className="produto-botoes">
                          <button
                            onClick={() => {handleRemover(ldt.id_Produto)
                              
                            }}
                            className="produto-lista-button"
                          >
                            remover
                          </button>
                          
                        </div>
                      </div>
                      <div className="carrinho-itempreco-container">
                        <p>Preco: R${ldt.Valor}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
