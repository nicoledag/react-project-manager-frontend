import React from 'react';
import { Link } from 'react-router-dom'

const Project = (props) => {

    console.log("project", props)



    return (
        <div>
            <table id="table-js" >
            <thead>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
              {/* <th>Client Name</th> */}
              {/* <th>Manager</th> */}
              <th>Target Completion Date</th>
              <th>Completion Date</th>
              {/* <th>Edit</th> */}
            </tr>
            </thead>
            <tr>
              <td><Link to={`"/projects/${props.id}"`}>{props.name}</Link></td>
              <td>{props.desc} </td>
              {/* <td>${props.company_name} </td> */}
              {/* <td>${this.username} </td> */}
              <td>{props.target_completion_date} </td>
              <td>{props.completion_date} </td>
              {/* <td><a href="/projects/${this.id}/edit" </a>Edit Project</td> */}
            </tr>
          </table>
        </div>
    )
}

export default Project