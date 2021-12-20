import React from "react";
import "./SolicitudHistorialCrediticio.css";

function SolicitudHistorialCrediticio() {
  return (
    <div className="row container-fluid content animate__animated animate__fadeInRight">
      <div className="column">
        <ul className="nav flex-column credit-form">
          <li>
            <h1>Historial Crediticio</h1>
          </li>
          <li>
            <input className="nav-item" placeholder="Nombre" />
          </li>
          <select name="cars" id="cars">
            <option value="volvo">1001</option>
            <option value="saab">1002</option>
            <option value="opel">1003</option>
            <option value="audi">1004</option>
          </select>
          <div className="submit-btn ">
            <button className="submit ">GENERAR REPORTE</button>
          </div>
        </ul>
      </div>
      <div className="column">
        <img className="credit-img animate__animated animate__jello" src="https://cdn-icons.flaticon.com/png/512/3491/premium/3491692.png?token=exp=1638849663~hmac=2abf0e0d2484603268b5de9a8fdf2bc8" alt="banagrario-img" />
      </div>
    </div>
  );
}

export default SolicitudHistorialCrediticio;
