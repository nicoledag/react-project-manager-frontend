import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, Switch } from 'react-router-dom' 
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { getCurrentUser } from './actions/currentUser'
import DashboardContainer from './containers/DashboardContainer'
import ClientsContainer from './containers/ClientsContainer'
import Navbar from './components/layout/Navbar'
import Home from './components/Home'
import OpenProjects from './components/projects/OpenProjects.js'
import AllProjects from './components/projects/AllProjects.js'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  // componentDidMount() {
  //   fetch('http://localhost:3001/api/v1/users')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  render() { 
    return ( 
      
    <div>
      <Navbar />
      <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Register}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/projects' component={DashboardContainer} />
          <Route exact path='/openProjects' component={OpenProjects} />
          <Route exact path='/allProjects' component={AllProjects} />
          <Route exact path='/clients' component={ClientsContainer} />

      </Switch>
    </div> );
  }
}
 
export default connect(null, { getCurrentUser } )(App);