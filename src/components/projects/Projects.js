import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import Project from './Project'
import Button from '@material-ui/core/Button';

const Projects = (props) => {

    const { loggedIn } = props;
    // console.log("loggedIn", loggedIn)
    // if (!loggedIn) return <Redirect to='/' />

        // console.log("projects props", props)

    const sortedProjects = props ? props.projectsList.projects.projects.sort(function(a,b){
        let dateA = new Date(a.created_at), dateB = new Date(b.created_at);
        return dateB - dateA;
      }) : null
    console.log("sortedProjects", sortedProjects)

    let allProjects = sortedProjects ? sortedProjects.map(project => (
        <Project 
            key={project.id}
            id={project.id}
            department={project.attributes.department}
            name={project.attributes.name}
            desc={project.attributes.desc}
            client_id={project.attributes.client_id}
            completion_date={project.attributes.completion_date}
            target_completion_date={project.attributes.target_completion_date}
        />
    ))
    : null
    console.log("allProjects", allProjects)
    return ( 
        <div className="container">
            
            <Button variant="contained" color="primary">
                   Open Projects
            </Button>
            <Button variant="contained" color="primary">
                   Recently Saved Projects
            </Button>
            <Button variant="contained" color="primary">
                   All Projects
            </Button>

            <div>
                {/* {allProjects} */}
                </div>
        </div>

        );
    }
 
        
const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}
 
export default connect(mapStateToProps)(Projects);

