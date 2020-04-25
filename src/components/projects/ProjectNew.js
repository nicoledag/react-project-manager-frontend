import React, { Component } from 'react';

class ProjectNew extends Component {
    state = {  }

    handleSubmit(){
        
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
                                <label htmlFor="description">Description:  </label>
                            </div>  
                                <input type="text" name="description" id="description" placeholder="Enter Description" onChange={this.handleChange} required/>
                        </div>
                        
                        <div className="row"> 
                            <div className="label">    
                                <label htmlFor="client_name">Client Name:  </label>
                            </div>  
                                <input type="text" name="client_name" id="client_name" placeholder="Scroll down client name" onChange={this.handleChange} required/>
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
                                <input type="date" name="completion_date" id="completion_date" placeholder="Enter Completion Date" onChange={this.handleChange} required/>
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
 
export default ProjectNew;