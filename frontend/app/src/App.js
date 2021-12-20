import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import ActiveCredits from './components/ActiveCredits';
import CreateUser from './components/CreateUser';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import { SimuladorCredito, SolicitudCredito, SolicitudProrroga } from './components/SimuladorCredito';
import SolicitudHistorialCrediticio from './components/SolicitudHistorialCrediticio';
import { TablaGestionUsuario } from './components/TablaGestionUsuario';
import TablaHistorialCrediticio from './components/TablaHistorialCrediticio';

function App() {
  
      return (
        <div className="row">
          <div className="col-md-3">
          <Sidebar />
          </div>
          <div className="col-md-9 bg-warning">
            <Routes>
              <Route exact path="/credits" element={<ActiveCredits />} />         
              <Route exact path="/user" element={<CreateUser />} />             
            </Routes>
          </div>
        </div>
      );
    
}
  export default App;