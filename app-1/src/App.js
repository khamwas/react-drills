import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      input:''
    }
  }
  changeHandler(e){
    this.setState({input:e.target.value})
  }
  
  render(){
    let display=this.state.input.slice();
    return<div className='App'>
      <input className='text' onChange={(e)=>this.changeHandler(e)}></input>
      <h2>{display}</h2>
    </div>
  }
}

export default App