import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../actions/project'

class ProjectNew extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            desc: '',
            client_id: '',
            target_completion_date: '',
            completion_date: '',
        }
    }


    handleChange = e =>{
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }

    render() { 
        return ( 
            <div className="container-form">
                <div className="middle-container">
                    <h1>New Project</h1>

                    <form onSubmit={this.handleSubmit}>
                        <div className="row"> 
                            <div className="label">    
                                <label htmlFor="name">Project Name:  </label>
                            </div>  
                                <input type="text" name="name" id="name" placeholder="Enter Project Name" onChange={this.handleChange} required/>
                        </div>

                        <div className="row"> 
                            <div className="label">    
                                <label htmlFor="desc">Description:  </label>
                            </div>  
                                <input type="text" name="desc" id="desc" placeholder="Enter Description" onChange={this.handleChange} required/>
                        </div>
                        
                        <div className="row"> 
                    <div className="label">   
                        <label htmlFor="name">Client:  Required  </label>
                            <select onChange={(e) => this.setState({client_id: e.target.value})} >>
                            <option>Select an option.</option>
                                {this.props.clients.clients.map((client) => <option key={client.id} id={client.id} value={client.id} >{client.attributes.name}</option>) }
                            </select > 
                        </div>
                    </div>

                        <div className="row"> 
                            <div className="label">    
                                <label htmlFor="target_completion_date">Target Completion Date:  </label>
                            </div>  
                                <input type="date" name="target_completion_date" id="target_completion_date" placeholder="Enter Target Completion Date" onChange={this.handleChange} required/>
                        </div>
                        <div className="row"> 
                            <div className="label">    
                                <label htmlFor="completion_date">Completion Date:  </label>
                            </div>  
                                <input type="date" name="completion_date" id="completion_date" placeholder="Enter Completion Date" onChange={this.handleChange} />
                        </div>
                        <div className="row">
                         <input type="submit" value="Submit"></input>
                        </div>

                    

                    </form>
               </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        clients: state.clientReducer,
    }
}
 
export default connect(mapStateToProps, { createProject })(ProjectNew);