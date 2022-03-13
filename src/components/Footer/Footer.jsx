import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./Footer.css";

export default class Footer extends Component {
    // 对接收的props作限制：类型、必要性
  static propTypes = {
    todos: PropTypes.array.isRequired,
  }
  // 全选 
  handleCheckAll = (event)=> {
    this.props.checkAll(event.target.checked)
  }
  // 清除所有为done的列表
  handleClearAllDone = ()=> {
    this.props.clearAllDone()
  }
  render() {
    const {todos} = this.props;
    // 已完成的统计
    // 使用array.reduce()方法来统计求和
    const doneCount = todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0),0);
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total && total !==0 ? true :false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部 {total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone} >
          清除已完成任务
        </button>
      </div>
    );
  }
}
