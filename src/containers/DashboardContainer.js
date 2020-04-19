import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProjects } from "../actions/project.js"
import Projects from '../components/projects/Projects.js'
import { Button } from '@material-ui/core';


class DashboardContainer extends Component {
    state = {  }

    componentDidMount(){
        this.props.fetchProjects()
    }

    render() { 
        console.log(this.props)
        return ( 
            <div>
                <h2>Welcome</h2>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                Primary
                </Button>
                <Button variant="contained" color="secondary">
                Secondary
                </Button>
                <Button variant="contained" disabled>
                Disabled
                </Button>
                {/* <Button variant="contained" color="primary" href="#contained-buttons">
                Link
                </Button> */}
                {/* <Projects projectsList={this.props}/> */}
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