import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import defaultImg from "../../assets/default.png";
import "./styles.css";

export default function Coments(props) {
  const [com, setCom] = useState([]);
  const id = props.id;

  useEffect(async () => {
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
  }, []);

  return (
    <div className="coments-container">
      <div className="coments-title">
        <p>Comentários:</p>
      </div>
      <div className="coments-list-container">
        {com.length>0? (
          com.map((comentario) => (
            <div
              key={comentario.id_Comentario}
              className="coments-details-container"
            >
              <div className="coments-img-container">
                <img
                  className="coments-user-data"
                  src={
                    comentario.ImagemPerfil
                      ? "data:image/png;base64," + comentario.ImagemPerfil
                      : defaultImg
                  }
                />
                <p>{comentario.Nome}</p>
              </div>
              <div className="coments-data-container">
                {comentario.Nota!=undefined? (
                  <div className="coments-nota-container">
                    <p>Nota: {comentario.Nota}</p>
                  </div>
                ) : (
                  <></>
                )}
                <div className="coments-text-container">
                  <p>{comentario.Descricao}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-comments">
            <p>Sem comentários</p>
          </div>
        )}
      </div>
    </div>
  );
}
