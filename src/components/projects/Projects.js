import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Project from './Project'
import AllProjects from './AllProjects'
import OpenProjects from './OpenProjects'
import RecentlySavedProjects from './RecentlySavedProjects'
import { fetchProjects } from '../../actions/project'
import { fetchClients } from '../../actions/client'
// import Button from '@material-ui/core/Button';


class Projects extends Component {
    state = { 
        
  
    }

    componentDidMount(){
        this.props.fetchProjects()
        this.props.fetchClients()
    }

    handeClickRecentlySavedProjects(){
        let recentlySavedProjects = document.getElementById('recently_saved_projects');
        let buttonStyle = document.getElementById('btn_style_recently_saved_projects');

        if(recentlySavedProjects.className === "open"){
            //take data off screen
            recentlySavedProjects.className = ""
            buttonStyle.style.backgroundColor = "#015cdc"
            buttonStyle.style.color = "white"
          
          
        }else {
            //show data on screen
            recentlySavedProjects.className = "open"
            buttonStyle.style.backgroundColor = "RGB(137, 237, 255)"
            buttonStyle.style.color = "black"
        }
    }

    handleClickOpenProjects(){
        // console.log("handleClick props", this.props) 
        // console.log("I have been clicked")
        let openProjects = document.getElementById('open_projects');
        let buttonStyle = document.getElementById('btn_style_open_projects');

        if(openProjects.className === "open"){
            //take data off screen
            openProjects.className = ""
            buttonStyle.style.backgroundColor = "#015cdc"
            buttonStyle.style.color = "white"
          
        }else {
            //show data on screen
            openProjects.className = "open"
            buttonStyle.style.backgroundColor = "RGB(137, 237, 255)"
            buttonStyle.style.color = "black"
        }
    }

    handleClickAllProjects(){
        // console.log("handleClick props", this.props) 
        // console.log("I have been clicked")
        let allProjects = document.getElementById('all_projects');
        let buttonStyle = document.getElementById('btn_style_all_projects');

        if(allProjects.className === "open"){
            //take data off screen
            allProjects.className = ""
            buttonStyle.style.backgroundColor = "#015cdc"
            buttonStyle.style.color = "white"
            
        }else {
            //show data on screen
            allProjects.className = "open"
            buttonStyle.style.backgroundColor = "RGB(137, 237, 255)"
            buttonStyle.style.color = "black"
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
                        <button id="btn_style_open_projects"className="button" onClick={() => this.handleClickOpenProjects(this.props)}>
                            <div>Open Projects</div>
                        </button>
                    </div>
                    <div className="item">
                        <button id="btn_style_recently_saved_projects"className="button" onClick={() => this.handeClickRecentlySavedProjects(this.props)}>
                            Recently Saved Projects
                        </button>
                    </div>
                    <div className="item">
                        <button id="btn_style_all_projects" className="button" onClick={() => this.handleClickAllProjects(this.props)} >
                            <div>All Projects</div>
                        </button>
                    </div>
                </div>

                <div className="projects">

                    <div id="open_projects">
                        <OpenProjects />
                    </div>

                    <div id="recently_saved_projects">
                        <RecentlySavedProjects />
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
 
export default connect(mapStateToProps, {fetchProjects, fetchClients})(Projects);



