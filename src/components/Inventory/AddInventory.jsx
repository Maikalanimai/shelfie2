import React, { Component } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom'

export default class AddInventory extends Component {
  constructor() {
    super();
    this.state = {
      img: '',
      name: '',
      price: '',
    };
  }

  handleChange(e, key) {
    this.setState({
        [key]: e.target.value
    })
  }

  addItem=() =>{
      Axios.post('/api/inventory/', {
          name: this.state.name,
          price: this.state.price,
          img: this.state.img
      }).then(console.log('Success!'))
  }


  render() {
    return (
      <div>

        
        <img alt={'reeeeeeeeeeee'} src={this.state.img}/>
  
        <input 
        onChange={e => this.handleChange(e, 'img')}
        className='img'
        placeholder='Image Link'
        type='text'
        value={this.state.img}
        />
        <input 
        onChange={e => this.handleChange(e, 'name')}
        className='Name'
        placeholder='Name'
        type='text'
        value={this.state.name}
        />
        <input 
        onChange={e => this.handleChange(e, 'price')}
        className='Price'
        placeholder='Price'
        type='num'
        value={this.state.price}
        />
        <Link to="/"><button>Go Back</button></Link>
        <Link to='/'><button onClick={() => this.addItem()}>Add Item</button></Link>
      </div>
    );
  }
}
