import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Project from './Project'
import AllProjects from './AllProjects'
import Button from '@material-ui/core/Button';


class Projects extends Component {
    state = {  }

    handleClick(){
        console.log("I have been clicked")
        // document.getElementById('all_projects').style.display = 'block';
    }

    render() { 

        const { loggedIn } = this.props;
        // console.log("loggedIn", loggedIn)
        if (!loggedIn) return <Redirect to='/' />

        return ( 
            <div className="main">
                <div className="btn_container">
                
                    <Button variant="contained" color="primary">
                        Open Projects
                    </Button>
                    <Button variant="contained" color="primary">
                        Recently Saved Projects
                    </Button>
                    <Button onClick={this.handleClick()} variant="contained" color="primary">
                        <div>All Projects</div>
                    </Button>
                </div>

                <div className="projects">

                    <div id="open_projects">
                        {/* <OpenProjects /> */}
                    </div>

                    <div id="recently_saved_projects">
                        {/* <OpenProjects /> */}
                    </div>

                    <div id="all_projects">
                        <AllProjects />
                    </div>


                </div>
            

             </div>

         );
    }
}
 
const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}
 
export default connect(mapStateToProps)(Projects);




        // console.log("projects props", props)

    // const sortedProjects = props ? props.projectsList.projects.projects.sort(function(a,b){
    //     let dateA = new Date(a.created_at), dateB = new Date(b.created_at);
    //     return dateB - dateA;
    //   }) : null
    // console.log("sortedProjects", sortedProjects)

    // let allProjects = sortedProjects ? sortedProjects.map(project => (
    //     <Project 
    //         key={project.id}
    //         id={project.id}
    //         department={project.attributes.department}
    //         name={project.attributes.name}
    //         desc={project.attributes.desc}
    //         client_id={project.attributes.client_id}
    //         completion_date={project.attributes.completion_date}
    //         target_completion_date={project.attributes.target_completion_date}
    //     />
    // ))
    // : null
    // console.log("allProjects", allProjects)
