import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
	handleSearch =()=> {
		this.props.updateAppState({isFirst:false,isLoad:true});
		// 连续解构赋值 + 重命名
		const {keyWordElem:{value:keyword}} = this;
		axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
			response => {
				this.props.updateAppState({isLoad:false,users:response.data.items});
			},
			error =>{
				this.props.updateAppState({isLoad:false,err:error.message});
			}  
		)
	}
	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElem = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
					<button onClick={this.handleSearch}>搜索</button>
				</div>
			</section>
		)
	}
}
