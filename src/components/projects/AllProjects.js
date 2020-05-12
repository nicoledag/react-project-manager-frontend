import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class AllProjects extends Component {
  constructor(props){
    super();
    this.state = {
      search: ''
    }
  }

  updateSearch = (e) =>{
    console.log(e.target.value)
    this.setState({search: e.target.value.substr(0,20)})
  }

  
  render() { 

    console.log("search", this.state.search)



    const sortedProjects = this.props ? this.props.projects.projects.sort(function(a,b){
        let dateA = new Date(a.attributes.created_at), dateB = new Date(b.attributes.created_at);
        return dateB - dateA;
    }) : null
    console.log("sortedProjects", sortedProjects)

  // const projectList = sortedProjects.map(proj => 
  //   createData(`${proj.id}`, <Link to={`/projects/${proj.id}`}>{proj.attributes.name}</Link>,`${proj.attributes.desc}`, `${proj.attributes.client_id}`, `${proj.attributes.budget}`, `${proj.attributes.quantity}`, `${proj.attributes.end_destination}`, `${proj.attributes.target_completion_date}`, `${proj.attributes.completion_date}`)
  // )

    
  let clientName = ' '

    return ( 
      <div className="table-container">
      <h2>ALL PROJECTS</h2>
        {/* <input type="text"
          id="search"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          placeholder="Search name..." /> */}
          <table id="table-js" >
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Description</th>
                <th>Client Name</th>
                <th>Budget</th>
                <th>Quantity</th>
                <th>End Destination</th>
                <th>Target Completion Date</th>
                <th>Completion Date</th>
                {/* <th>Edit</th> */}
              </tr>
            </thead>
            <tbody>

              {sortedProjects.map(row => (
              // console.log("row", row),
              // console.log("prop", this.props),
              clientName = this.props.clients.clients ? this.props.clients.clients.filter(client => parseInt(client.id) === row.attributes.client_id)[0] : null,
              // console.log("client", clientName),
               

              <tr key={row.id}>
                <td><Link to={`/projects/${row.id}`}>{row.attributes.name}</Link></td>
                <td>{row.attributes.desc} </td>
                <td>{clientName.attributes.name} </td>
                <td>${row.attributes.budget} </td>
                <td>{row.attributes.quantity}</td>
                <td>{row.attributes.end_destination}</td>
                <td>{row.attributes.target_completion_date}</td>
                <td>{row.attributes.completion_date === null ? "OPEN" : row.attributes.completion_date}</td>
                {/* <td><a href="/projects/${this.id}/edit" </a>Edit Project</td> */}
              </tr>
            ))}
            </tbody>
          </table>
        </div>
     );
  }
}
const mapStateToProps = state =>{
    return {
        projects: state.projectReducer,
        clients: state.clientReducer,
    }
}
export default connect(mapStateToProps, null)(AllProjects);


