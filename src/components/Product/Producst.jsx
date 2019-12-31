import React, { Component } from "react";
import {Link} from "react-router-dom"

export default class Product extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt={`${this.props.name}`}/>
        <h3>Product: {this.props.name}</h3>
        <h4>Price: {this.props.price}</h4>
        <Link to={`/edit/${this.props.id}`}><button>Edit</button></Link>
        <button>Delete</button>
      </div>
    );
  }
}
