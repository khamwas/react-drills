import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      data: ["spaghetti", "ice cream", "sushi", "bologna", "cheeses"]
    };
  }

  changeHandler(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    let display = this.state.data
      .filter(elem => elem.includes(this.state.input))
      .map(x => <h2>{x}</h2>);
    return (
      <div className="App">
        <input onChange={e => this.changeHandler(e)} />
        {display}
      </div>
    );
  }
}

export default App;
