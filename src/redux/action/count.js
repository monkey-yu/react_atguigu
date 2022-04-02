import {INCREMENT, DECREMENT} from '../constant';
// 同步action,返回一个一般对象{}
export const createIncrementAction = data => ({type:INCREMENT, data});
export const createDecrementAction = data => ({type:DECREMENT, data});

// 异步action,返回一个函数.异步action中通常会调用一个同步action,异步action不是必须要用的（可以在组件中去异步）
export const createIncrementAsyncAction = (data,time) => {
    return (dispatch)=> {
        setTimeout(() =>{
            dispatch(createIncrementAction(data))
        },time)
    }
}