
import React,{Component} from 'react';
import Count from './containers/Count';
import Person from './containers/Person';
import './App.css';
export default class App extends Component{
  render() {
		return (
			<div className="container">
				<Count />
				<hr/>
				<Person />
			</div>
		)
	}
}
