import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import DashBoard from "./components/DashBoard/DashBoard";
import {Route, Switch} from 'react-router-dom'
import AddInventory from './components/Inventory/AddInventory'
import Edit from './components/Inventory/Edit'
import Axios from "axios";

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    Axios.get('/api/inventory').then(res => 
      this.setState({
        inventory: res.data
      }))
  }

  componentDidUpdate() {
    Axios.get('/api/inventory').then(res => 
      this.setState({
        inventory: res.data
      }))
  }


  render() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
        exact path='/'>
          <DashBoard 
          inventory={this.state.inventory}/>
        </Route>
        <Route path='/addinventory'>
          <AddInventory/>
        </Route>
        <Route path='/edit/:id'>
          <Edit/>
        </Route>
      </Switch>
    </div>
  )};
}

export default App;
