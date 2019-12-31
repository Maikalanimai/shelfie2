import React, {Component} from 'react'
import Product from '../Product/Producst'
import './dashboard.css'

export default class DashBoard extends Component {
    constructor() {
        super()
        this.state= {
            inventory: [],
        }
    }

    componentDidUpdate(){
        
    }
    render(){
        
        return(
            <div className='products'>
                
                {this.props.inventory.map((e,i) => {
            return(<Product
            id={e.id}
            name={e.name}
            price={e.price}
            img={e.img}/>)
        })}
            </div>
        )
    }
}