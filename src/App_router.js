
import React,{Component} from 'react';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';
// import Hello from './components/Hello';
// import Welcome from './components/Welcome';
// import Header from './components/Header/Header';
// import List from './components/List/List';
// import Footer from './components/Footer/Footer';
// import Search from './components/Search'
// import GithubList from './components/GithubList'
import About from './components/About';
import Other from './components/Other';
import HeaderRouter from './components/HeaderRouter';
import './App.css';
export default class App extends Component{
  render() {
		return (
			<div className="container">
				<HeaderRouter />
				<br/>
				<ul>
					<li>
					<NavLink to="/about">about</NavLink>
					</li>
					<li><NavLink to="/other">other</NavLink></li>
				
				</ul>
				
				<br/>
				<div>
					<Switch>
						<Route path='/about' component={About}></Route>
						<Route path='/other' component={Other}></Route>
						<Redirect to="/about"/>
					</Switch>
				</div>
			</div>
		)
	}
}
