import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';


const Clients = (props) => {

    const { loggedIn } = props;
    const clientList = props.clientList.clients.clients.map(client => 
         <li>{client.attributes.name}</li>
    )

    console.log(clientList)
    return ( 
        <div className="container">
            <h2>Clients Page</h2>
            {clientList}
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

