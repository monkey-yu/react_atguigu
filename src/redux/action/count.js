import {INCREMENT, DECREMENT} from '../constant';
// 同步action,返回一个一般对象{}
export const increment = data => ({type:INCREMENT, data});
export const decrement = data => ({type:DECREMENT, data});

// 异步action,返回一个函数.异步action中通常会调用一个同步action,异步action不是必须要用的（可以在组件中去异步）
export const incrementAsync = (data,time) => {
    return (dispatch)=> {
        setTimeout(() =>{
            dispatch(increment(data))
        },time)
    }
}