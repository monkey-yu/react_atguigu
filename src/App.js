
import React,{Component} from 'react';
import Count from './containers/Count';
import store from './redux/store';
import './App.css';
export default class App extends Component{
  render() {
		return (
			<div className="container">
				<Count store={store}/>
			</div>
		)
	}
}
