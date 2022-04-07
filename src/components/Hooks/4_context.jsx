import React, { Component } from 'react'
// 创建Context对象
const myContext = React.createContext();
const {Provider, Consumer} = myContext;
export default class Parent extends Component {
    state = {name: 'tom', age:16};

  render() {
      const {name,age} = this.state;
    return (
      <div className='parent'>
          <h3>我是父组件</h3>
          <p>A的用户名是：{name},年龄是：{age}</p>
          <Provider value={{name,age}}>
            <B />
          </Provider>
          
      </div>
    )
  }
}
class B extends Component {
    render() {
      return (
        <div className='child'>
            <h3>我是子组件</h3>
            < C />
        </div>
      )
    }
  }
  // 类组件 
//   class C extends Component {
//       // 声明接收context
//     static contextType = myContext
//     render() {
//       return (
//         <div className='grand'>
//             <h3>我是孙组件</h3>
//             <p>来自A的用户名是: {this.context.name},年龄是{this.context.age}</p>
//         </div>
//       )
//     }
//   }
 // 函数组件 要用Consumer
 function C() {
   return (
    <div className='grand'>
        <h3>我是孙组件</h3>
        <p>来自A的用户名是: 
            <Consumer>
                {
                    value => `${value.name},年龄是${value.age}`
                }
            </Consumer>
        </p>
    </div>
   )
 }
 
