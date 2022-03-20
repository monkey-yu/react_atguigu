import React, { Component } from 'react'

export default class Other extends Component {
  render() {
      console.log('Other组件里的props',this.props)
    return (
      <h3>我是Other</h3>
    )
  }
}
