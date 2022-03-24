import React, { Component } from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import News from './News';
import Message from './Message';
export default class About extends Component {
  render() {
    return (
        <div>
             <h3>我是About</h3>
            <ul>
                <li>
                    {/* 路由跳转时要加父路由 */}
                    <NavLink to="/about/news">News</NavLink>
                </li>
                <li>
                    <NavLink to="/about/message">Message</NavLink>
                </li>
            </ul>
            <hr />
            <Switch>
                {/* 路由匹配这里不加父路由 */}
                <Route path='/about/news' component={News}></Route>
				<Route path='/about/message' component={Message}></Route>
            </Switch>
        </div>
     
    )
  }
}
