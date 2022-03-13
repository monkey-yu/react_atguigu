import React, { Component } from "react";
import PropTypes from 'prop-types';
import Item from "../Item/Item";
import "./List.css";

export default class List extends Component {
   // 对接收的props作限制：类型、必要性
   static propTypes = {
    todos: PropTypes.array.isRequired,
    changeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  render() {
    const {todos,changeTodo,deleteTodo} = this.props;
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=> {
            return <Item key={todo.id} {...todo} changeTodo={changeTodo} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
    );
  }
}
