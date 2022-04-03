// 汇总所有的reducer,交出去
import { combineReducers } from "redux";
// 引入count,persons reducer
import count from './count';
import persons from './person';
// 使用combineReducers来组合多个reducer
export default combineReducers({
    count,
    persons
})
// 尽量使用key,value同名触发简写方式
// 上面{count}  与{count:count} 相同。