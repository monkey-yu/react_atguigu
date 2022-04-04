import React from 'react'

// 这个是类组件
// export default class Demo extends React.Component {
//     state = {count: 0};
//     add = ()=> {
//         this.setState({count: this.state.count+1})
//     }
//   render() {
//     return (
//       <div>
//           <h3>当前求和为： {this.state.count}</h3>
//           <button onClick={this.add}>点我加1</button>
//       </div>
//     )
//   }
// }

// 这个是函数组件
// 函数组件没有this, 使用hooks来保存或更改state
export default function Demo() {
    const [count,setCount] = React.useState(0);
    const add = ()=> {
        // setCount(count+1) // 第一种写法
        setCount(count=> count+1) // 第二种写法：函数式
    }
  return (
    <div>
        <h3>当前求和为： {count}</h3>
        <button onClick={add}>点我加1</button>      
     </div>
  )
}

