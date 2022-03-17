import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import './index.css'

export default class GithubList extends Component {
	// 状态
	state = {
		users:[],
		isFirst: true,
		isLoad: false,
		err: ''
	}
	// 组件挂载上
	componentDidMount(){
		this.token = PubSub.subscribe('updateState',(_,data)=> {
			this.setState(data)
		})
	}
	// 组件即将卸载
	componentWillUnmount(){
		PubSub.unsubscribe(this.token)
	}
	render() {
		const {users,isFirst,isLoad,err}= this.state
		return (
			<div className="row">
				{
					isFirst ? <h2>输入关键字，点击搜索</h2> :
					isLoad ? <h2>Loading......</h2> : 
					err ? <h4 style={{color:'red'}}>{err}</h4> :
					users.map(user => {
						return (
							<div className="card" key={user.id}>
								<a rel="noreferrer" href={user.html_url} target="_blank">
									<img alt="head_portrait" src={user.avatar_url} style={{width:'100px'}}/>
								</a>
								<p className="card-text">{user.login}</p>
							</div>
						)
					})
				}
				
			</div>
		)
	}
}
