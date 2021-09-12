import React, { useState, useEffect } from "react";

import "./styles.css";

import logoImg from "../../assets/logo.png";

export default function ProdItem(props) {
  console.log(props);

  return (
    <div className="ProdItem-container">
      <div className="ProdItem-img-container">
        <img
          className="prodItem-img"
          src={props.imagem ? "data:image/png;base64," + props.imagem : logoImg}
        ></img>
      </div>
      <div className="ProdItem-info-container">
        <p className="ProdItem-titulo">{props.nome}</p>
        <p className="ProdItem-preco">{"R$ " + props.valor}</p>
      </div>
    </div>
  );
}
