import { ADD_PERSON } from "../constant";

const initState = [{id:'001',name:'tim',age:12}];
export default function persons(preState=initState,action){
    // console.log('personReducer@@@init')
    const {type,data} = action;
    switch (type){
        case ADD_PERSON:
            // 不能使用array.unshift(), 这样只改变了array,但是引用地址不会变，redux不会更新。
            // 深比较、浅比较的概念
            // redux中的reducer必须得是纯函数
            return [data,...preState]
        default:
            return preState;
    }
};