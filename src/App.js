import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, Switch } from 'react-router-dom' 
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { getCurrentUser } from './actions/currentUser'
import DashboardContainer from './containers/DashboardContainer'
import Navbar from './components/layout/Navbar'

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
          <Route exact path='/' component={DashboardContainer} />
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Register}/>

      </Switch>
    </div> );
  }
}
 
export default connect(null, { getCurrentUser } )(App);