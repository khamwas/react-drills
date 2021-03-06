import React, { Component } from "react";
import axios from "axios";
import "./Product.css";
import { Link } from "react-router-dom";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      product: []
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get(
        `https://practiceapi.devmountain.com/products/${
          this.props.match.params.id
        }`
      )
      .then(res => this.setState({ product: [res.data] }));
    //   .then(res => console.log(res.data));
  }
  render() {
    let display = this.state.product.map(elem => {
      return (
        <div key={elem.id} className="outerCont">
          {" "}
          <div className="productCont">
            <h2>{elem.title}</h2>
            <h4>{elem.desc}</h4>
            <img className="productImg" src={elem.image} alt="elem.title" />
            <h4>Price: ${elem.price}</h4>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div>{display}</div>
        <br />
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }
}

export default Details;
