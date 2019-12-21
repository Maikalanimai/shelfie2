import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import DashBoard from "./components/DashBoard/DashBoard";
import {Route, Switch} from 'react-router-dom'
import AddInventory from './components/Inventory/AddInventory'
import Edit from './components/Inventory/Edit'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
        exact path='/'>
          <DashBoard />
        </Route>
        <Route path='/addinventory'>
          <AddInventory/>
        </Route>
        <Route path='/edit/:id'>
          <Edit/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
