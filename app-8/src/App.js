import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: []
    };
  }

  componentDidMount() {
    axios
      .get("https://swapi.co/api/people/")
      .then(result => this.setState({ arr: result.data.results }));
  }

  render() {
    let display = this.state.arr.map((elem, i) => {
      return (
        <div key={i}>
          <h2>{elem.name}</h2>
          <h4>{elem.gender}</h4>
          <h4>{elem.birth_year}</h4>
          <h4>{elem.height}</h4>
          <h4>{elem.mass}</h4>
          <h4>{elem.eye_color}</h4>
        </div>
      );
    });
    return <div className="App">{display}</div>;
  }
}

export default App;
