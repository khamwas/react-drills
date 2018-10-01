import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      list:[]
    }
  }

changeHandler(e){
  this.setState({input:e.target.value})
}
updateList(){
  let newList=this.state.list.slice();
  newList.push(this.state.input);
  this.setState({list:newList})
}

 render(){
   return<div className='App'> 
  <h1>My to-do list:</h1>
  <input placeholder='Enter New Task' onChange={(e)=>this.changeHandler(e)}></input>
  <button onClick={()=>this.updateList()}>Add</button>
  <Todo listItems={this.state.list}></Todo>
   </div>
}
}

export default App;
