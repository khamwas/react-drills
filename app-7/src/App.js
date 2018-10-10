import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask';
import List from './List';


class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      list:[]
    }
    this.update=this.update.bind(this);
  }
  changeHandler(e){
    this.setState({input:e.target.value})
  }
  update(){
    const newList= this.state.list.slice();
    newList.push(this.state.input)
    this.setState({list:newList})
  }
render(){
  return<div className='App'>
  <h1>My to-do list:</h1>
  <input 
  placeholder='Enter new task'
  onChange={(e)=>this.changeHandler(e)}></input>
  <NewTask update={this.update}></NewTask>
  <List list={this.state.list}></List>

  </div>
}
}

export default App;
