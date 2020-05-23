import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, Switch } from 'react-router-dom' 
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { getCurrentUser } from './actions/currentUser'
import { fetchProjects } from './actions/project'
import { fetchClients } from './actions/client'
import { fetchComments } from './actions/comment'
import DashboardContainer from './containers/DashboardContainer'
import ClientsContainer from './containers/ClientsContainer'
import Project from './components/projects/Project'
import ProjectNew from './components/projects/ProjectNew'
import ProjectEdit from './components/projects/ProjectEdit'
import ProjectCommentNew from './components/projects/ProjectCommentNew'
import CommentEdit from './components/projects/CommentEdit'

import Navbar from './components/layout/Navbar'
import Home from './containers/Home'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchProjects()
    this.props.fetchClients()
    this.props.fetchComments()

  }

  // componentDidMount() {
  //   fetch('http://localhost:3001/api/v1/users')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  render() { 
    const { projects } = this.props;
    const { clients } = this.props;
    const { comments } = this.props;
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
        <Route exact path='/projects/new' component={ProjectNew}/>

        <Route exact path='/projects/:id' render={props => {
            const project = projects.projects.find(project => project.id === props.match.params.id)
          
            return <Project project={project} {...props} />
           }
          }/>


        <Route exact path='/projects/:id/edit' render={props => {
            const project = projects.projects.find(project => project.id === props.match.params.id)
            // debugger;
            return <ProjectEdit project={project} {...props} />
           }
          }/>

        <Route exact path='/clients' component={ClientsContainer} /> 
        <Route exact path='/projects/:id/comments/new' component={ProjectCommentNew}/>
        
        <Route exact path='/comments/:id/edit' render={props => {
          const comments = projects.projects.map(project => project.attributes.comments).flat()
          const comment = comments ? comments.filter(c => c.comment_id === parseInt(props.match.params.id))[0] :null
            return <CommentEdit comment={comment} {...props} />
           }
          }/>


        {/* <Route exact path='/comments/:id/edit' component={CommentEdit} />  */}

      </Switch>
    </div> );
  }
}

const mapStateToProps = (state) => {

  return{
    projects: state.projectReducer,
    comments: state.commentReducer,
  }
  
}
 
export default connect(mapStateToProps, { getCurrentUser, fetchProjects, fetchClients, fetchComments } )(App);