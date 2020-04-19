import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProjects } from "../actions/project.js"
import Projects from '../components/projects/Projects.js'

import Buttons from '../components/projects/Buttons.js'


class DashboardContainer extends Component {
    state = {  }

    componentDidMount(){
        this.props.fetchProjects()
    }

    render() { 
        console.log(this.props)
        return ( 
            <div className="data-container">
                <div>
                    <h2>Welcome</h2>
                    <Buttons />
                    <Projects projectsList={this.props}/>
                </div>
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