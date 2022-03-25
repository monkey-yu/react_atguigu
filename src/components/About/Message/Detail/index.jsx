import React, { Component } from 'react'

const detailData = [
    {id:'01',content:'内容1'},
    {id:'02',content:'内容2'},
    {id:'03',content:'内容3'}
]
export default class Detail extends Component {
  handleBack = () => {
    this.props.history.goBack()
  }
  handleForward = () => {
    this.props.history.goForward()
  }
  render() {
      console.log('Detail组件接收',this.props);
      const {id,title} = this.props.match.params;
      const findResult = detailData.find((item) => {
        return item.id === id
      })

    return (
      <div>
        <ul>
            <li>ID: {id}</li>
            <li>TITLE: {title}</li>
            <li>CONTENT: {findResult.content}</li>
        </ul>
        <button onClick={() => this.handleBack()}>后退</button>&nbsp;
        <button onClick={() => this.handleForward()}>前进</button>&nbsp;

      </div>
    )
  }
}
