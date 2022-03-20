
import React,{Component} from 'react';
import {NavLink, Route, Routes,Navigate} from 'react-router-dom';
// import Hello from './components/Hello';
// import Welcome from './components/Welcome';
// import Header from './components/Header/Header';
// import List from './components/List/List';
// import Footer from './components/Footer/Footer';
// import Search from './components/Search'
// import GithubList from './components/GithubList'
import About from './components/About';
import Other from './components/Other';
import './App.css';
export default class App extends Component{
  render() {
		return (
			<div className="container">
				<h1>learn react router</h1>
				<br/>
				<ul>
					<li>
					<NavLink to="/about">about</NavLink>
					</li>
					<li><NavLink to="/other">other</NavLink></li>
				
				</ul>
				
				<br/>
				<div>
					<Routes>
						{/* react-router-dom 版本不同，里面参数名不同，这里用element并且值是组件 */}
						{/* 有嵌套路由，path后面要加/*，否则不会往下匹配 */}
						<Route path='/about/*' element={<About/>}></Route>
						<Route path='/other' element={<Other/>}></Route>
						{/* redirect 被弃用，使用下面一行来实现重定向 */}
						{/* <Route path="*" element={<Navigate to="/other" />} /> */}
					</Routes>
				</div>
			</div>
		)
	}
}
