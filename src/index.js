// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this file exists in your project
import App from './App'; // The main App component where your game is initialized

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
