import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  changeHandler(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.changeHandler(e)} />
        <br />
        {this.state.input}
      </div>
    );
  }
}

export default App;
