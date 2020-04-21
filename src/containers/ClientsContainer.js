import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchClients } from "../actions/client.js"
import Clients from '../components/clients/Clients.js'



class ClientsContainer extends Component {
    state = {  }

    componentDidMount(){
        this.props.fetchClients()
    }
    
    render() { 
        return (
            <div>
                <Clients />
            </div>
          );
    }
}

// const mapStateToProps = state => {
//     return {
//         clients: state.clientReducer
//     }
// }
 
export default connect(null, {fetchClients}) (ClientsContainer);