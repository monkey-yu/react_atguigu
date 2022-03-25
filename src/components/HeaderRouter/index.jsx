import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class HeaderRouter extends Component {
    handleBack = () => {
    this.props.history.goBack()
    }
    handleForward = () => {
    this.props.history.goForward()
    }
    render() {
        return (
            <div>
                <h2>Learn react router</h2>
                <button onClick={() => this.handleBack()}>后退</button>&nbsp;
                <button onClick={() => this.handleForward()}>前进</button>&nbsp;

            </div>
        )
    }
}
// 使用 withRouter包裹一般组件，可以获取路由组件身上的属性，即上面可以使用this.props.history这个api
// withRouter返回的是一个新组件
export default withRouter(HeaderRouter) 
