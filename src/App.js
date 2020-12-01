import React, { Component } from 'react'
import AppNavbar from "./components/Layout/AppNavbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Dashboard from "./components/Layout/Dashboard"

class App extends Component {
  render() {
    return (
      <Router>
      <div >
        <AppNavbar/>
        <div className = "mx-20 my-10">
        <Switch>
          <Route exact path = "/" component = {Dashboard}/>
        </Switch>
        </div>
      </div>
      </Router>
    )
  }
}
export default App;