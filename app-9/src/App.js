import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/details">details</Link>
          <br />
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
