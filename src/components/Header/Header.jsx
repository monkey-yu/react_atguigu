import React, { Component } from "react";
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';
import "./Header.css";

export default class Header extends Component {
  // 对接收的props作限制：类型、必要性
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  onKeyUp = (event)=> {
    const {target,keyCode} = event;
    if(keyCode !== 13) return;
    if(target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    const todoObj = {
      id: nanoid(),name: target.value,done:false
    }
    this.props.addTodo(todoObj);
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.onKeyUp}
        />
      </div>
    );
  }
}
