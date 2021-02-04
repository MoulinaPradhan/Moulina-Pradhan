import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './BackgroundColor.css'
import './dummy1.css'

import App from './App';
import "./bootstrap.min.css";

import { defineCustomElements } from 'shooting-stars/dist/loader';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

