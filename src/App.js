import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, Switch } from 'react-router-dom' 
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { getCurrentUser } from './actions/currentUser'
import { fetchProjects } from './actions/project'
import DashboardContainer from './containers/DashboardContainer'
import ClientsContainer from './containers/ClientsContainer'
import Project from './components/projects/Project'
import Navbar from './components/layout/Navbar'
import Home from './containers/Home'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchProjects()

  }

  // componentDidMount() {
  //   fetch('http://localhost:3001/api/v1/users')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  render() { 
    const { projects } = this.props;
    // console.log(projects)
    return ( 
      
    <div>
      <Navbar />
      <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Register}/>
          <Route exact path='/' component={Home}/>

         <Route exact path='/projects' render={props => {
            return <DashboardContainer projects={projects} {...props} />
           }
          }/>

        {/* <Route exact path='/projects' component={DashboardContainer} /> */}
        <Route exact path='/projects/:id' render={props => {
            const project = projects.projects.find(project => project.id === props.match.params.id)
            console.log("app business props", project)
            return <Project project={project} {...props} />
           }
          }/>


        <Route exact path='/clients' component={ClientsContainer} />



      </Switch>
    </div> );
  }
}

const mapStateToProps = (state) => {

  return{
    projects: state.projectReducer
  }
  
}
 
export default connect(mapStateToProps, { getCurrentUser, fetchProjects } )(App);