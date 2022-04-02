// 引入connect用于连接UI组件和redux
import {connect} from 'react-redux';
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action_creator';

import React, { Component } from 'react'
class Count extends Component {;
    // 相加
    increment = ()=> {
        const {value} = this.selectNumber;
        this.props.jia(value*1);
        // store.dispatch(createIncrementAction(value*1))
    };
    // 相减
    decrement = ()=> {
        const {value} = this.selectNumber;
        this.props.jian(value*1);
    };
    // 如果当前和数是奇数则加
    incrementIfOdd = ()=> {
        const {value} = this.selectNumber;
        if(this.props.count %2 === 0) return;
        this.props.jia(value*1);
    }
    // 异步相加
    incrementAsync = ()=> {
        const {value} = this.selectNumber;
        this.props.jiaAsync(value*1,500);
        // store.dispatch(createIncrementAsyncAction(value*1,500));  
    }
    render() {
        return (
        <div>
            <h1>当前求和为:{this.props.count}</h1>
            <select ref={c => this.selectNumber = c}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.incrementIfOdd}>如果当前和数是奇数则加</button>&nbsp;
            <button onClick={this.incrementAsync}>异步加</button>&nbsp;
        </div>
        )
    }
}
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
    )(Count)