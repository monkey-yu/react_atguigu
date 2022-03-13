
import React,{Component} from 'react';
// import Hello from './components/Hello';
// import Welcome from './components/Welcome';
import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import './App.css';
export default class App extends Component{
  state = {
    todos: [
      {id:'001',name:'吃饭',done: true},
      {id:'002',name:'睡觉',done: true},
      {id:'003',name:'打代码',done: false},
      {id:'004',name:'逛街',done: false}
    ]
  }
  // 增加一条todo
  addTodo = (todoObj)=> {
    const newTodo = [todoObj,...this.state.todos];
    this.setState({todos: newTodo})
  }
  // 修改todo的状态
  changeTodo = (todoObj)=> {
    // 我原本写的，加工数组
    // let newTodos = Array.from(this.state.todos);
    // newTodos.forEach((item) => {
    //   if(item.id === todoObj.id){
    //     item.done = todoObj.done
    //   }
    // });
    // 老师写的，加工数组
    const newTodos = this.state.todos.map((item)=> {
      if(item.id === todoObj.id) return {...item,done: todoObj.done}
      else return item;
    })
    this.setState({todos: newTodos})
  }
  // 删除todo
  deleteTodo = (id) => {
    const {todos} = this.state;
    // 过滤不是数组中id 不等于传入id的数组
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    })
    this.setState({todos: newTodos})
  }
  // 全选
  checkAll = (done)=> {
    const {todos} = this.state;
    const newTodos = todos.map(todoObj => {
      return {...todoObj,done:done}
    })
    this.setState({todos: newTodos})
  }
  // 清除所有为done的列表
  clearAllDone = ()=> {
    const {todos }= this.state;
    const newTodos = todos.filter(todo => {
      return !todo.done
    })
    this.setState({todos: newTodos})
  }

  render (){
    const {todos} = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo}/>
        <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
        <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
      </div>
    )
  }
}
