import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProjects } from "../actions/project.js"
import Projects from '../components/projects/Projects.js'
import { Redirect } from 'react-router-dom'


class DashboardContainer extends Component {
    state = {  }

    

    componentDidMount(){
        this.props.fetchProjects()
    }

    render() { 

        // const { loggedIn } = this.props;
        // if(!loggedIn){
        //     return <Redirect to="/" />
        // }

        console.log(this.props)
        return ( 
            <div className="">
                <div>
                    {/* <h2>Projects</h2> */}
                    <Projects projectsList={this.props}/>
                </div>
            </div> 
        );
    }
}

const mapStateToProps = (state, {currentUser}) => {
    return {
        currentUser,
        loggedIn: !!currentUser,
        projects: state.projectReducer
    }
}
 
export default connect(mapStateToProps, { fetchProjects })(DashboardContainer);