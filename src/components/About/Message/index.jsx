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
                <Link to={`/about/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
              </li>
            )
          })
        } 
        </ul>
        <hr />
        <Switch>
          <Route path='/about/message/detail/:id/:title' component={Detail}></Route>
        </Switch>
      </div>
    )
  }
}
