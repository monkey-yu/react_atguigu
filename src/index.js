// 引入react核心库、react-dom 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 引入App组件
import App from './App';
import store from './redux/store';
import {Provider } from 'react-redux'
// 渲染App组件到页面
// 使用Provider包裹App组件，使其后代组件都能接受到store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
document.getElementById('root')
);
// store.subscribe()检测redux中的状态变化，只要变化，就调用render
// store.subscribe(()=> {
//   ReactDOM.render(
//         <App />,
//     document.getElementById('root')
//     );
// })

// react-redux 不用自动监测state的变化，来render。 所以上面可以注释

