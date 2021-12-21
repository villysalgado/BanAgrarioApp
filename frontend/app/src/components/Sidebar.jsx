import React from "react";
import "./Sidebar.css";
import { Link } from 'react-router-dom'
/* import SolicitudHistorialCrediticio from "./SolicitudHistorialCrediticio"; */



function Sidebar() {
    return (
        <div className="container-fluid">
            <div className="row main-body">
                <div className="d-flex main-column flex-column vh-100 flex-shrink-0 p-3 text-white animate__animated animate__fadeInLeft" style={{width: 320 }}> <Link to="/" className="d-flex align-items-center  mb-md-0 me-md-auto text-white text-decoration-none"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Banco_Agrario_de_Colombia_logo.svg/1200px-Banco_Agrario_de_Colombia_logo.svg.png" alt="" width="32" height="32" className="rounded-circle me-2" /> <span className="fs-4 m-3">Banco Agrario de Colombia</span> </Link>
                    <hr/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item"> <Link to="/" className="nav-link user-name active home mb-5" aria-current="page"> <i className="fa fa-home"></i><span className="ms-2">NOMBRE</span> </Link> </li>
                        <li> <Link to="/credits" className="nav-link text-white menu-items m-1"> SOLICITAR CREDITOS </Link> </li>
                        <li> <Link to="!#" className="nav-link text-white menu-items m-1"> SOLICITUD PRORROGA </Link> </li>
                        <li> <Link to="!#" className="nav-link text-white menu-items m-1"> CERTIFICADOS </Link> </li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
}

export default Sidebar;