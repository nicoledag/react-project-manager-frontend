import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchClients } from "../actions/client.js"

class ClientsContainer extends Component {
    state = {  }

    componentDidMount(){
        this.props.fetchClients()
    }
    
    render() { 
        return (
            <div>

            </div>
          );
    }
}
 
export default connect(mapStateToProps, {fetchClients}) (ClientsContainer);