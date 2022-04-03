/*
    1. 该文件是用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数；
    2. reducer函数会接收到两个参数，分别是：之前的状态（preState）,动作对象（action）.
*/
import {INCREMENT, DECREMENT} from '../constant';
// 初始化为0
const initState = 0
export default function count(preState = initState,action){
    // console.log('countReducer@@@init')
    const {type,data} = action;
    switch(type){
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}