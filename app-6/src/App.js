import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      tasks: []
    };
  }

  changeHandler(e) {
    this.setState({ input: e.target.value });
  }

  addTask() {
    let arr = this.state.tasks.slice();
    arr.push(this.state.input);
    this.setState({ tasks: arr });
  }

  render() {
    let display = this.state.tasks.map(elem => <h2>{elem}</h2>);

    return (
      <div className="App">
        <input
          onChange={e => this.changeHandler(e)}
          placeholder="Enter New Task"
        />
        <button onClick={() => this.addTask()}>Add</button>
        {display}
      </div>
    );
  }
}

export default App;
