import React from 'react'
import ReactDOM from 'react-dom';
// 这个是类组件
// export default class Demo extends React.Component {
//   state = {count: 0};
//   add = ()=> {
//       this.setState({count: this.state.count+1})
//   }
//   // 组件挂载后每秒count自增
//   componentDidMount(){
//     this.timer = setInterval(()=> {
//       this.setState({count: this.state.count+1})
//     },1000)
//   }
//   // 卸载组件
//   unmount = ()=> {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }
//   // 即将卸载组件钩子： 清除掉定时器
//   componentWillUnmount(){
//     clearInterval(this.timer)
//   }
//   render() {
//     return (
//       <div>
//           <h3>当前求和为： {this.state.count}</h3>
//           <button onClick={this.add}>点我加1</button>
//           <button onClick={this.unmount}>卸载组件</button>
//       </div>
//     )
//   }
// }

// 这个是函数组件
// 函数组件没有this, 使用hooks来保存或更改state
export default function Demo() {
  const [count,setCount] = React.useState(0);
  //useEffect 相当于两个钩子： DidMount、DidUpdate (根据后一个参数传什么决定) 
  React.useEffect(()=> {
    let timer = setInterval(()=> {
      setCount(count=> count+1)
    },1000)
    // 返回一个函数，则相当于 willUnmount钩子
    return ()=> {
      clearInterval(timer)
    }
  },[])
  function add(){
      // setCount(count+1) // 第一种写法
      setCount(count=> count+1) // 第二种写法：函数式
  }
  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <div>
        <h3>当前求和为： {count}</h3>
        <button onClick={add}>点我加1</button>  
        <button onClick={unmount}>卸载组件</button>    
     </div>
  )
}

