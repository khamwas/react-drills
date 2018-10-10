import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  changeHandler(key, e) {
    this.setState({ [key]: e.target.value });
  }
  login() {
    alert(
      "Username: " + this.state.username + " Password: " + this.state.password
    );
  }

  render() {
    return (
      <div className="App">
        <input
          onChange={e => this.changeHandler("username", e)}
          placeholder="Username"
        />
        <input
          onChange={e => this.changeHandler("password", e)}
          placeholder="Password"
        />
        <button onClick={() => this.login()}>Login</button>
      </div>
    );
  }
}

export default App;
