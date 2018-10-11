import React, { Component } from "react";
import axios from "axios";
import "./Product.css";
import { Link } from "react-router-dom";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get("https://practiceapi.devmountain.com/products")
      .then(res => this.setState({ products: res.data }));
  }

  render() {
    let display = this.state.products.map(elem => {
      return (
        <Link key={elem.id} to={`/details/${elem.id}`}>
          <div className="productCont">
            <img className="productImg" src={elem.image} alt="elem.title" />
            <h2>{elem.title}</h2>
          </div>
        </Link>
      );
    });
    return (
      <div>
        <h1>Products</h1>
        <div className="outerCont">{display}</div>
      </div>
    );
  }
}

export default Products;
