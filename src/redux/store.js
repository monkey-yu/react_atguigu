// 该文件专门用于暴露一个store对象，整个应用只有一个store对象

// 引入createStore,专门用于创建redux中最为核心的store对象
import { applyMiddleware, createStore,combineReducers } from "redux";
import thunk from 'redux-thunk';
import countReducer from './reducer/count';
import personReducer from './reducer/person';
const allReducer = combineReducers({
    sum: countReducer,
    persons: personReducer
})
// 暴露store
export default createStore(allReducer,applyMiddleware(thunk))
