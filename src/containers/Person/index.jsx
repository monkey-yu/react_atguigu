import React, { Component } from 'react'
import {connect} from 'react-redux';
import {nanoid } from 'nanoid';
import { AddPerson } from '../../redux/action/person';
class Person extends Component {
    addPerson = ()=> {
        const name= this.nameInput.value;
        const age= this.ageInput.value;
        const personObj = {
            id: nanoid(),
            name,
            age
        }
        this.props.add(personObj);
        this.nameInput.value= '';
        this.ageInput.value = '';
    }
  render() {
    return (
      <div>
          <h2>Person组件</h2>
          <h4>上面Count组件的总和： {this.props.count}</h4>
          <input type="text" ref={c => this.nameInput = c}/>
          <input type="number" ref={c => this.ageInput = c}/>
          <button onClick={this.addPerson}>添加</button>
          <ul>
              {
                this.props.persons.map((person) => {
                    return <li key={person.id}>{person.name}---{person.age}</li>
                })
              }
              
          </ul>
      </div>
    )
  }
}
export default connect(
    state => ({persons: state.persons, count:state.count}), // 映射状态
    {add: AddPerson}   // 映射操作状态的方法
)(Person)
