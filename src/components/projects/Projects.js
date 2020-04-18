import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

const Projects = (props) => {

    const { loggedIn } = props;
    // console.log("loggedIn", loggedIn)
    if (!loggedIn) return <Redirect to='/' />

        console.log("projects props", props)
        return ( 
            <div>Projects are here</div>
         );
    }
 
        
const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}
 
export default connect(mapStateToProps)(Projects);

