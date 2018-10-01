import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      data:['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheeses']
    }
  }

  changeHandler(e){
    this.setState({input:e.target.value})
  }

  render(){
    let display = this.state.data.filter(elem=>elem.includes(this.state.input)).map(elem=><h2>{elem}</h2>)
    return<div className='App'>
      <input onChange={(e)=>this.changeHandler(e)}></input>
      {display}
    </div>
  }
}

export default App;
