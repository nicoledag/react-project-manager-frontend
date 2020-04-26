import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Project = (props) => {

    console.log("project", props)

    

  // console.log(props.clients.clients)
  // console.log(props.project.attributes.client_id)
    let client = props.clients.clients && props.project ? props.clients.clients.filter(client => parseInt(client.id) === props.project.attributes.client_id)[0] : null
    console.log("client", client)

    // ADD CLIENT SORT BY DATE CREATED!!

    let comments = props.project ? props.project.attributes.comments.map(comment => 
        <div>
           <li className="project-text"> <b className="titlespacing">Comment:</b> {comment.text}</li>
        </div>
      ) 
      : null

    return (
        <div className="data_container">
          <h2>Project Page</h2>
          <li className="project-text"> <b className="titlespacing">Project Name:</b> {props.project ? props.project.attributes.name : null}</li>
          <li className="project-text"> <b className="titlespacing">Description:</b> {props.project ? props.project.attributes.desc : null}</li>
          <li className="project-text"> <b className="titlespacing">Client:</b> {client ? client.attributes.name : null}</li>
         
          <li className="project-text"> <b className="titlespacing">Budget:</b> {props.project ? props.project.attributes.budget : null}</li>
          <li className="project-text"> <b className="titlespacing">Quantity:</b> {props.project ? props.project.attributes.quantity : null}</li>
          <li className="project-text"> <b className="titlespacing">End Destination:</b> {props.project ? props.project.attributes.end_destination : null}</li>

          
          <li className="project-text"> <b className="titlespacing">Target Completion Date:</b> {props.project ? props.project.attributes.target_completion_date : null}</li>
          <li className="project-text"> <b className="titlespacing">Completion Date:</b> {props.project ? props.project.attributes.completion_date : null}</li>
          <br></br>
          {comments}
        
        </div>


    )
}
const mapStateToProps = state => {
  return {
    clients: state.clientReducer,
  }
}
export default connect(mapStateToProps, null)(Project)