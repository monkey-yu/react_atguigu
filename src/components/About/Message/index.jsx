import React, { Component } from 'react'
import Detail from './Detail'
import {Link, Route, Switch} from 'react-router-dom'
export default class Message extends Component {
  state = {
    messageArr:[
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'}
    ]
  }
  
  pushShow = (id,title)=> {
    // push查看 + params传参
    // 下面这行是： 编程式导航
    this.props.history.push(`/about/message/detail/${id}/${title}`);
  }
  replaceShow = (id,title)=> {
    // replace查看 + params传参
    this.props.history.replace(`/about/message/detail/${id}/${title}`);
  }
  // 进入message组件2s后跳转到news组件去
  // componentDidMount(){
  //   setTimeout(()=> {
  //     this.props.history.push(`/about/news`);
  //   },2000)
  // }
  render() {
    const  {messageArr} = this.state
    return (
      <div>
        <ul>
        {
          messageArr.map((messageObj) => {
            return (
              <li key={messageObj.id}>
                {/* 向路由组件传递params参数 */}
                {/* 向路由组件传递参数的方法： params、search、state */}
                {/* replace关键字 是指路由不是push,是替换 */}
                {/* <Link replace to={`/about/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link> */}
                <Link to={`/about/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
                &nbsp;<button onClick={() => this.pushShow(messageObj.id,messageObj.title)}>push查看</button>
                &nbsp;<button onClick={() => this.replaceShow(messageObj.id,messageObj.title)}>replace查看</button>
              </li>
            )
          })
        } 
        </ul>
        <hr />
        <Switch>
          <Route  path='/about/message/detail/:id/:title' component={Detail}></Route>
        </Switch>
      </div>
    )
  }
}
