import React, { PureComponent } from 'react'

export default class Demo extends PureComponent {
    state = {carName: '奔驰'};
    changeName = ()=> {
        this.setState({})
        // this.setState({carName: '荣威'})
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.state);
    //     console.log(nextState);
    //     return !this.state.carName === nextState;
    // }
    render() {
        console.log('Demo---render')
        return (
        <div>
            <h3>我是父组件</h3>
            <p>车的名字： {this.state.carName}</p>
            <button onClick={this.changeName}>改车名</button>
            <Child />
        </div>
        )
    }
}

class Child extends PureComponent {
    render() {
        console.log('Child---render')
        return (
            <div>
                <h3>我是子组件</h3>
            </div>
        )
    }
}
 // 1. Child 组件没有用到父组件的数据，但是父组件render，子组件也会render ===> 效率低；
 // 2. this.setState({}) 虚晃一枪，并没有改里边的值，但也重新render了 ===》 效率低；
 // 3. shouldComponentUpdate(nextProps,nextState)有两个参数，判断当前的props/state与接下来改变的props/state值一样，则return false,不重新render;
 // 4. 使用PureComponent : 纯粹的组件，这样代替了手动写shouldComponentUpdate钩子函数