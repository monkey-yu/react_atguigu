
import React,{Component} from 'react';
// import Count from './containers/Count';  // 容器组件
// import Person from './containers/Person'; // 容器组件
import Demo from './components/Hooks/4_context';
import './App.css';
export default class App extends Component{
  render() {
		return (
			<div className="container">
				<Demo />
			</div>
		)
	}
}
