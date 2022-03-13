import React, { Component } from "react";
import "./Item.css";

export default class Item extends Component {
  state = {
    mouse: false // 标识鼠标移入、移除
  }
  // 鼠标悬浮
  handleMouse = (flag)=> {
    return () => {
      this.setState({mouse:flag})
    }
  }
  // checkbox选中与否
  handleChange = (id,name) => {
    return (event) => {
      const changeTodoObj = {
        id: id,name:name,done:event.target.checked
      }
      this.props.changeTodo(changeTodoObj)
    }
  }
  // 删除的回调
  handleDelete = (id)=> {
    return () => {
      if(window.confirm('确定删除吗？')){
        this.props.deleteTodo(id)
      }
    }
  }
  render() {
    const {id,name,done} = this.props;
    const {mouse} =this.state;
    return (
      <li style={{background: mouse? '#ddd' : '#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleChange(id,name)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{display: mouse? 'block': 'none'}}
          onClick={this.handleDelete(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
