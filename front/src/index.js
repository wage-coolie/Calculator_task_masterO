import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Popper from '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.js";
import axios from 'axios'

let token = 'sha1$02abc1f8$1$95036fced03d038b1b647a6326929a1eac8b3b8b'
axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// console.log(axios.defaults.headers.common['Authorization'])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
  );


