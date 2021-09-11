import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import api from "../../services/api";

import logoImg from "../../assets/logo.png";

export default function Header() {
  const [userId, setuserId] = useState();
  const [userData, setuserData] = useState({});
  const [userType, setuserType] = useState("");

  useEffect(async () => {
    await setuserId(localStorage.getItem("reqid"));
    await setuserType(localStorage.getItem("reqtype"));
  }, []);

  useEffect(async () => {
    getImg();
  }, [userType]);

  async function getImg() {
    if (!userId && !userType) return;
    try {
      const response = await api.get(`/user/${userId}`, {
        headers: {
          cliente: userType == "0" ? "1" : "0",
          fornecedor: userType,
          reqid: userId,
          reqtype: String(userType),
        },
      });
      if (userType === "0") {
        setuserData(response.data.Cliente[0]);
      } else {
        setuserData(response.data.Fornecedor[0]);
      }
    } catch {
      alert("Não foi possível carregar a imagem");
    }
  }
  return (
    <div className="header-container">
      <div className="header-title-container">
        <img className="header-img-logo" src={logoImg} alt="Logo" />
        <span className="header-title">Lojinha Gourmet</span>
      </div>
      <div className="header-links-container">
        <Link to="/profile">
          <div className="header-carrinhoButton">
            <b>Carrinho</b>
          </div>
        </Link>
        {userData ? (
          <Link to="/profile">
            <div className="header-img-container">
              <img
                className="header-user-data"
                src={
                  userData.ImagemPerfil
                    ? "data:image/png;base64," + userData.ImagemPerfil
                    : logoImg
                }
              />
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="header-carrinhoButton">Login/Registre-se</div>
          </Link>
        )}
      </div>
    </div>
  );
}
