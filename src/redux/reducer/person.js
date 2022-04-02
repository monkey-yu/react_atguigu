import { ADD_PERSON } from "../constant";

const initState = [{id:'001',name:'tim',age:12}];
export default function personReducer(preState=initState,action){
    // console.log('personReducer@@@init')
    const {type,data} = action;
    switch (type){
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState;
    }
};