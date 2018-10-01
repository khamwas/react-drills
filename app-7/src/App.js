import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask';
import List from './List';

class App extends Component {
  constructor(){
    super();
    this.state={
    input: '',
    list: []
  }
  this.changeHandler=this.changeHandler.bind(this);
  this.addTask=this.addTask.bind(this);
}
changeHandler(e){
  this.setState({input:e.target.value})
}
addTask(){
  let newList=this.state.list.slice();
  newList.push(this.state.input);
  this.setState({list:newList});
  console.log(this.state.list)
}

  render(){
  return<div className='App'>
  <h1>My to-do list:</h1>
  <input placeholder='Enter New Task' onChange={(e)=>this.changeHandler(e)}></input>
  <NewTask newTask={this.addTask}></NewTask>
  <List list={this.state.list}></List>
  </div>
}
}

export default App;
