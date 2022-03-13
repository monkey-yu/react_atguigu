import React, { Component } from 'react'
import './index.css'

export default class GithubList extends Component {
	render() {
		const {users,isFirst,isLoad,err}= this.props
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
