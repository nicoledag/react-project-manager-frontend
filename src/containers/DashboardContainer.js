import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProjects } from "../actions/project.js"
import Projects from '../components/projects/Projects.js'

class DashboardContainer extends Component {
    state = {  }

    componentDidMount(){
        this.props.fetchProjects()
    }

    render() { 
        console.log(this.props)
        return ( 
            <div>
                <Projects projectsList={this.props}/>
            </div> 
        );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projectReducer
    }
}
 
export default connect(mapStateToProps, { fetchProjects })(DashboardContainer);