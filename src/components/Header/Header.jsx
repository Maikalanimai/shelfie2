import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'

export default class Header extends Component {
    render(){
        return(
            <div>
                <header>
                <h1>Shelfie</h1>
                <Link
                to='/' ><button>DashBoard</button></Link>
                <Link
                to='/addinventory'><button>Add Item</button></Link>
                </header>
            </div>
        )
    }
}