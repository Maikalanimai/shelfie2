import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Axios from "axios";
import './form.css'

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      img: '',
      price: '',
    };
  }

  componentDidMount() {
    Axios.get(`/api/inventory/${this.props.match.params.id}`).then(res => {
      this.setState({
        id: res.data[0].id,
        name: res.data[0].name,
        img: res.data[0].img,
        price: res.data[0].price
      });
    });
  }

  handleChange(e, key) {
    this.setState({
        [key]: e.target.value
    })
  }

  updateItem = () => {
    Axios.put(`/api/inventory/${this.props.match.params.id}`, {
        name: this.state.name,
        price: this.state.price,
        img: this.state.img,
    }).catch(console.log('failure'))
    
  }

 

  render() {
    
    return (
      <div className='form'>
        <img src={this.state.img} alt={this.state.name}/>
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
        <Link to='/'><button onClick={() => this.updateItem()}>Submit</button></Link>
      </div>
    );
  }
}
export default withRouter(Edit);
