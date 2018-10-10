import React, { Component } from "react";
import Image from "./Image";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      img:
        "https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&h=350"
    };
  }

  render() {
    return (
      <div className="App">
        <h1>This is what space looks like</h1>
        <Image img={this.state.img} />
      </div>
    );
  }
}

export default App;
