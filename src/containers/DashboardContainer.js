import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProjects } from "../actions/project.js"

class DashboardContainer extends Component {
    state = {  }

    componentDidMount(){
        this.props.fetchProjects()
    }

    render() { 
        return ( 
            <div>
                <h1>Projects</h1>
            </div> 
        );
    }
}
 
export default connect(null, { fetchProjects })(DashboardContainer);