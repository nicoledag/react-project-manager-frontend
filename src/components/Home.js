import React from 'react';
import {connect} from 'react-redux'
import { clearCurrentUser } from '../actions/currentUser';
import { Redirect } from 'react-router';

const Home = (props) => {
    const { loggedIn } = props
    
    if(!loggedIn){
        return <Redirect to="/login" />
    }
    return(
        <div>Welcome to Project Dashboard</div>
    )
}

const mapStateToProps = ({currentUser}) => {
   return {
       currentUser,
       loggedIn:  !!currentUser
   }

}

export default (connect(mapStateToProps)(Home))
