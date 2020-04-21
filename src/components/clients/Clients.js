import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';


const Clients = (props) => {

    const { loggedIn } = props;

    return ( 
        <div className="container">
            <h2>Clients Page</h2>
        </div>

        );
    }
 
        
const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}
 
export default connect(mapStateToProps)(Clients);

