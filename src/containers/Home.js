import React, { Component } from 'react';
import {connect} from 'react-redux'
import { clearCurrentUser } from '../actions/currentUser';
import { Redirect } from 'react-router';
import Projects from '../components/projects/Projects'
import { render } from '@testing-library/react';

class Home extends Component {
    

    render() { 

        const { loggedIn } = this.props;
        if(!loggedIn){
            return <Redirect to="/login" />
        }

        console.log(this.props)
        return ( 
            <div className="">
                <div>
                    <h2>Welcome to Project Dashboard</h2>
                    <Projects projectsList={this.props}/>
                </div>
            </div> 
        );
    }
}



              
const mapStateToProps = ({currentUser}) => {
   return {
       currentUser,
       loggedIn:  !!currentUser
   }

}

export default (connect(mapStateToProps)(Home))
