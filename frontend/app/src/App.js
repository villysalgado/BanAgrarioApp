import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import ActiveCredits from './components/ActiveCredits';
import CreateUser from './components/CreateUser';
import Home from './components/Home';
import Login from './components/LogIn';
import Register from './components/Register';
import Sidebar from './components/Sidebar';
import { SimuladorCredito, SolicitudCredito, SolicitudProrroga } from './components/SimuladorCredito';
import SolicitudHistorialCrediticio from './components/SolicitudHistorialCrediticio';
import { TablaGestionUsuario } from './components/TablaGestionUsuario';
import TablaHistorialCrediticio from './components/TablaHistorialCrediticio';

function App() {
  
      return (
        <div >
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/register" element={<Register />}/>
            <Route exact path="/login" element={<Login />}/>
          </Routes>
          
          <div className="row">
            <Routes>
              <Route exact path="/credits" element={<>
              <div className="col-md-3">
              <Sidebar />
              </div>
              <div className="col-md-9 bg-warning">
              <ActiveCredits />
              </div>
              </>} />  

              
              <Route exact path="/user" element={<>
              <div className="col-md-3">
              <Sidebar />
              </div>
              <div className="col-md-9 bg-warning">
              <CreateUser />
              </div>
              </>} />        
                          
            </Routes>
          </div>
          </div>
        
      );
    
}
  export default App;