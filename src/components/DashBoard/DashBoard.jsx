import React, {Component} from 'react'
import Product from '../Product/Producst'

export default class DashBoard extends Component {
    constructor() {
        super()
        this.state= {
            inventory: [],
        }
    }

    render(){
        
        return(
            <div>
                DashBoard.jsx
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