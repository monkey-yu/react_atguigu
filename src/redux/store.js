// 该文件专门用于暴露一个store对象，整个应用只有一个store对象

// 引入createStore,专门用于创建redux中最为核心的store对象
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import allReducer from './reducer/index';

// 暴露store
export default createStore(allReducer,applyMiddleware(thunk))
