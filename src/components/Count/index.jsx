import React, { Component } from 'react'
import store from '../../redux/store';
export default class Count extends Component {;
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
