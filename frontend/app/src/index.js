import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
/* const cors = require("cors");
const express = require("express");
const app = express(); */
/* const mongoose = require("mongoose");
const port = process.env.PORT || 5000;  */

/* app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTEaaD TO REACT' }); */

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


