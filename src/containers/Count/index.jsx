// 引入ui组件
import CountUI from '../../components/Count';
// 引入connect用于连接UI组件和redux
import {connect} from 'react-redux';
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action_creator';
/* 
    1. mapStateToProps函数返回的是一个对象；
    2. 返回的对象中的key就作为传递UI组件的props的key;
    3. mapStateToPropsy用于传递状态。
*/
// const mapStateToProps = state => ({count:state});
/* 
   1. mapDispatchToProps函数返回的是一个对象；
   2. mapDispatchToProps用于传递操作状态的方法
*/
// const mapDispatchToProps = dispatch => (
//     {
//         jia: (data)=> {
//             dispatch(createIncrementAction(data))
//         },
//         jian: (data)=> {
//             dispatch(createDecrementAction(data))
//         },
//         jiaAsync: (data,time)=> {
//             dispatch(createIncrementAsyncAction(data,time))
//         }
//     }
// )
export default connect(
    state => ({count:state}),
    // mapDispatchToProps 的一般写法
    // dispatch => ({
    //     jia: (data)=> {
    //         dispatch(createIncrementAction(data))
    //     },
    //     jian: (data)=> {
    //         dispatch(createDecrementAction(data))
    //     },
    //     jiaAsync: (data,time)=> {
    //         dispatch(createIncrementAsyncAction(data,time))
    //     }
    // })
    // mapDispatchToProps的简写 （APi层的优化）
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }
    )(CountUI)