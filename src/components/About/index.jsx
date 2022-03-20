import React, { Component } from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';
import News from './news';
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
            <Routes>
                {/* 路由匹配这里不加父路由 */}
                <Route path='/news' element={<News/>}></Route>
				<Route path='/message' element={<Message/>}></Route>
            </Routes>
        </div>
     
    )
  }
}
