import React, { Component } from 'react';
import Image from './Image'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
  super();
  this.state={
    img:'https://previews.123rf.com/images/maximusnd/maximusnd1609/maximusnd160900889/63121694-beautiful-space-background-with-stardust-and-stars-deep-far-space-cosmic-glowing-colors-milky-way-co.jpg'
  }
}
  render(){
    return<div className='App'>
    
    <h2>This is what Space looks like</h2>
    <Image picture={this.state.img}></Image>
    </div>
  }
}

export default App;
