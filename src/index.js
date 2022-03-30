// 引入react核心库、react-dom 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 引入App组件
import App from './App';
import store from './redux/store';

// 渲染App组件到页面
ReactDOM.render(
  <App />,
document.getElementById('root')
);
// store.subscribe()检测redux中的状态变化，只要变化，就调用render
store.subscribe(()=> {
  ReactDOM.render(
        <App />,
    document.getElementById('root')
    );
})

