// 引入react核心库、react-dom 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 引入App组件
import App from './App';
import reportWebVitals from './reportWebVitals';

// 渲染App组件到页面
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
