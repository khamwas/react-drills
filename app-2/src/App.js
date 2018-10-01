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

  render() {
    let display = this.state.data.slice().map(elem=><h2>{elem}</h2>)
    return (
      <div className="App">
      {display}
      </div>
    );
  }
}

export default App;
