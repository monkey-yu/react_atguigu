// 引入connect用于连接UI组件和redux
import {connect} from 'react-redux';
import {increment, decrement, incrementAsync} from '../../redux/action/count';

import React, { Component } from 'react'
class Count extends Component {;
    // 相加
    increment = ()=> {
        const {value} = this.selectNumber;
        this.props.increment(value*1);
        // store.dispatch(increment(value*1))
    };
    // 相减
    decrement = ()=> {
        const {value} = this.selectNumber;
        this.props.decrement(value*1);
    };
    // 如果当前和数是奇数则加
    incrementIfOdd = ()=> {
        const {value} = this.selectNumber;
        if(this.props.count %2 === 0) return;
        this.props.increment(value*1);
    }
    // 异步相加
    incrementAsync = ()=> {
        const {value} = this.selectNumber;
        this.props.incrementAsync(value*1,500);
        // store.dispatch(incrementAsync(value*1,500));  
    }
    render() {
        return (
        <div>
            <h2>Count组件</h2>
            <h4>当前求和为:{this.props.count}, 下面Person组件的人数总和：{this.props.personSum}</h4>
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
//         increment: (data)=> {
//             dispatch(increment(data))
//         },
//         decrement: (data)=> {
//             dispatch(decrement(data))
//         },
//         incrementAsync: (data,time)=> {
//             dispatch(incrementAsync(data,time))
//         }
//     }
// )
export default connect(
    state => ({count:state.count, personSum: state.persons.length}),
    // mapDispatchToProps 的一般写法
    // dispatch => ({cc
    //     increment: (data)=> {
    //         dispatch(increment(data))
    //     },
    //     decrement: (data)=> {
    //         dispatch(decrement(data))
    //     },
    //     incrementAsync: (data,time)=> {
    //         dispatch(incrementAsync(data,time))
    //     }
    // })
    // mapDispatchToProps的简写 （APi层的优化）
    {
        increment,
        decrement,
        incrementAsync:incrementAsync
    }
    // 上面key,value同名触发简写
    )(Count)