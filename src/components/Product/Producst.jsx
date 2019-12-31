import React, { Component } from "react";
import {Link, withRouter} from "react-router-dom"
import Axios from "axios";
import './product.css'

class Product extends Component {

  deleteProduct=()=>{
    Axios.delete(`/api/inventory/${this.props.id}`).then(
      console.log('product removed')
    )
  }



  render() {
    return (
      <div className='item'>
        <img src={this.props.img} alt={`${this.props.name}`}/>
        <div className='content'>
          <h3>Product: {this.props.name}</h3>
        <h4>Price: {this.props.price}</h4>
        <Link to={`/edit/${this.props.id}`}><button>Edit</button></Link>
        <button onClick={() => this.deleteProduct()}>Delete</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Product)
