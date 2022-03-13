
import React,{Component} from 'react';
// import Hello from './components/Hello';
// import Welcome from './components/Welcome';
// import Header from './components/Header/Header';
// import List from './components/List/List';
// import Footer from './components/Footer/Footer';
import Search from './components/Search'
import GithubList from './components/GithubList'
import './App.css';
export default class App extends Component{
  // 
  state = {
    users:[],
    isFirst: true,
    isLoad: false,
    err: ''
  }
  updateAppState = (state)=> {
    this.setState(state)
  }
  render() {
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState}/>
				<GithubList {...this.state} />
			</div>
		)
	}
}
