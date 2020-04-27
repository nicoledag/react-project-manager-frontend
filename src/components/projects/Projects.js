import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Project from './Project'
import AllProjects from './AllProjects'
import OpenProjects from './OpenProjects'
// import Button from '@material-ui/core/Button';


class Projects extends Component {
    state = { 
        
  
    }

    handleClickOpenProjects(){
        console.log("handleClick props", this.props) 
        console.log("I have been clicked")
        let openProjects = document.getElementById('open_projects');
        let buttonStyle = document.getElementById('btn_style');

        if(openProjects.className === "open"){
            //take data off screen
            openProjects.className = ""
          
        }else {
            openProjects.className = "open"
            //show data on screen
            // buttonStyle.background.color = "red"
        }
    }



    handleClick(){
        console.log("handleClick props", this.props) 
        console.log("I have been clicked")
        let allProjects = document.getElementById('all_projects');
        let buttonStyle = document.getElementById('btn_style');

        if(allProjects.className === "open"){
            //take data off screen
            allProjects.className = ""
        }else {
            allProjects.className = "open"
            //show data on screen
            // buttonStyle.background.color = "red"
        }
    }

    render() { 

        const { projects } = this.props;

        const { loggedIn } = this.props;
        // console.log("loggedIn", loggedIn)
        if (!loggedIn) return <Redirect to='/' />

        return ( 
            <div className="main">
                <div className="btn_container">
                    <div className="item">
                        <button className="button" onClick={() => this.handleClickOpenProjects(this.props)}>
                            <div>Open Projects</div>
                        </button>
                    </div>
                    <div className="item">
                        <button className="button">
                            Recently Saved Projects
                        </button>
                    </div>
                    <div className="item">
                        <button id="btn_style" className="button" onClick={() => this.handleClick(this.props)} >
                            <div>All Projects</div>
                        </button>
                    </div>
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
 
const mapStateToProps = ({ currentUser }, state) => {
    return {
        currentUser,
        loggedIn: !!currentUser,
        projects: state.projectReducer,
    }
}
 
export default connect(mapStateToProps)(Projects);



