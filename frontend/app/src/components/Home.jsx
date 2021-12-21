import React from "react";
import './Home.css';
import { Link } from 'react-router-dom'

function Home() {
  const url_logo = 'https://www.bancoagrario.gov.co//images/ig2015/logo-banco-agrario-colombia.png';
  return (
    <>
      <div className="container-fluid">
          <div className="">
            <div className="row">
              <div className="col div-bg1">
                <div className="m-3 ">
                  <Link to="/">
                    <img className="img-fluid" src={url_logo} alt="Logo_Banagrario" />
                  </Link>
                </div>
                <div className="container-sm p-5 border">
                  <div className="row align-items-center">
                    <div className="col">
                      <h1 className="text-center text-white mb-0">Plataforma</h1>
                      <h2 className="text-center text-cl">de Crédito bancario</h2>
                    </div>
                  </div>
                  <div className="container px-4 ">
                    <div className="row gx-5">
                      <div className="col">
                        <div className="p-3 border">
                          <button  type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalLogin">
                            <Link to="/login" className="btn btn-primary">
                            Ingresar
                              </Link>
                          </button>
                        </div>
                      </div>
                      <div className="col">
                        <div className="p-3 border">
                          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalRegister">
                          <Link to="/register" className="btn btn-primary">
                            Registrar
                              </Link>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

              <div className="col div-bg2">

              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default Home
