import React, { useState, useEffect } from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";

import "./styles.css";
import api from "../../services/api";
import Header from "../Header";

import defaultImg from "../../assets/default.png";
import ProfileDataContainer from "../profile-data-container";
import ProfileLists from "../profile-lists";

export default function Profile() {
  const [userId, setuserId] = useState();
  const [userType, setuserType] = useState("");
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [img, setImg] = useState();
  const history = useHistory();
  const [opt, setOpt] = useState("1");

  function handleLogOut() {
    localStorage.clear();
    history.push("/");
  }

  function handleOpt(num) {
    setOpt(num);
    console.log(num);
  }

  useEffect(async () => {
    await setuserId(localStorage.getItem("reqid"));
    await setuserType(localStorage.getItem("reqtype"));
  }, []);

  useEffect(async () => {
    const response = await api.get(`/user/${userId}`, {
      headers: {
        cliente: userType == "0" ? "1" : "0",
        fornecedor: userType,
        reqid: userId,
        reqtype: String(userType),
      },
    });
    var rdata;
    if (userType == "0") rdata = response.data.Cliente[0];
    else rdata = response.data.Fornecedor[0];
    setImg(rdata.ImagemPerfil);
    setNome(rdata.Nome);
    setEmail(rdata.email);
  }, [userType]);

  return (
    <div className="profile-container">
      <Header />
      <div className="profile-body">
        <div className="profile-options">
          <button
            onClick={() => {
              handleOpt("1");
            }}
            className="profile-opt-button"
          >
            Dados
          </button>
          <button
            onClick={() => {
              handleOpt("2");
            }}
            className="profile-opt-button"
          >
            Listas
          </button>
          <button
            onClick={() => {
              handleOpt("3");
            }}
            className="profile-opt-button"
          >
            Compras
          </button>
          <button
            className="profile-opt-button"
            onClick={() => {
              handleOpt("4");
            }}
          >
            Slado
          </button>
          <button
            className="profile-opt-button2"
            onClick={() => {
              handleLogOut();
            }}
          >
            Log Out
          </button>
        </div>
        {opt == "1" ? <ProfileDataContainer /> : <></>}
        {opt == "2" ? <ProfileLists /> : <></>}
      </div>
    </div>
  );
}
