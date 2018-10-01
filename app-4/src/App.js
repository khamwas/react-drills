import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      usernameInput:'',
      passwordInput:''
    }
  } 
  changeHandler(key,e){
    this.setState({[key]:e.target.value})
  }

  logInAlert(){
    alert('Username: '+this.state.usernameInput+' Password: '+this.state.passwordInput)
  }
  
  render(){
     return<div className='App'>
     <input placeholder='username' onChange={(e)=>this.changeHandler('usernameInput',e)}></input>
     <input placeholder='password' onChange={(e)=>this.changeHandler('passwordInput',e)}></input>
    <button onClick={()=>this.logInAlert()}>Login</button>
     </div>
   }
}

export default App;
