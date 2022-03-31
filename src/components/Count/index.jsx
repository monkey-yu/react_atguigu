import React, { Component } from 'react'
import store from '../../redux/store';
import {createIncrementAction, createDecrementAction} from '../../redux/count_action_creator';
export default class Count extends Component {;
    // 相加
    increment = ()=> {
        const {value} = this.selectNumber;
        store.dispatch(createIncrementAction(value*1))
    };
    // 相减
    decrement = ()=> {
        const {value} = this.selectNumber;
        store.dispatch(createDecrementAction(value*1))
    };
    // 如果当前和数是奇数则加
    incrementIfOdd = ()=> {
        const {value} = this.selectNumber;
        const count = store.getState();
        if(count %2 === 0) return;
        store.dispatch(createIncrementAction(value*1))
    }
    // 异步相加
    incrementAsync = ()=> {
        const {value} = this.selectNumber;
        setTimeout(() =>{
            store.dispatch(createIncrementAction(value*1))
        },500)
        
    }
    render() {
        return (
        <div>
            <h1>当前求和为:{store.getState()}</h1>
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
