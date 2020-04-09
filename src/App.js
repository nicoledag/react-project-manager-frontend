import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom' 
import Login from './components/auth/Login'
import Register from './components/auth/Register'

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/projects')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() { 
    return ( 
      
    <div>
      <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Register}/>

      </Switch>
    </div> );
  }
}
 
export default App;