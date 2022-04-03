import { ADD_PERSON } from "../constant"
// 创建增加人的action
export const AddPerson = personObj => ({type:ADD_PERSON, data:personObj})