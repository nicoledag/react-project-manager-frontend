import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Project = (props) => {

    // console.log("project", props)

   if(props.project === undefined) return null
  // console.log(props.clients.clients)
  // console.log(props.project.attributes.client_id)
    let client = props.clients.clients ? props.clients.clients.filter(client => parseInt(client.id) === props.project.attributes.client_id)[0] : null
    // console.log("client", client)

    // ADD CLIENT SORT BY DATE CREATED!!
    function createData(id, text, created_at) {
      return { id, text, created_at };
    }
  

    let comments = props.project.attributes.comments ? props.project.attributes.comments.map(comment => 
      createData(`${comment.comment_id}`,`${comment.text}` , new Date(`${comment.created_at}`).toLocaleString().split(',')[0]) 
    )
    : null

      console.log("comments", comments)

      
    return (
        <div className="container-form">
          <div className="data-project">
            <h2>Project Information</h2>
            
            <li className="project-text"> <b className="titlespacing">Project Name:</b> {props.project ? props.project.attributes.name : null}</li>
            <li className="project-text"> <b className="titlespacing">Description:</b> {props.project ? props.project.attributes.desc : null}</li>
            <li className="project-text"> <b className="titlespacing">Client:</b> {client ? client.attributes.name : null}</li>
          
            <li className="project-text"> <b className="titlespacing">Budget: </b> ${props.project ? props.project.attributes.budget : null}</li>
            <li className="project-text"> <b className="titlespacing">Quantity:</b> {props.project ? props.project.attributes.quantity : null}</li>
            <li className="project-text"> <b className="titlespacing">End Destination:</b> {props.project ? props.project.attributes.end_destination : null}</li>

            
            <li className="project-text"> <b className="titlespacing">Target Completion Date:</b> {props.project ? props.project.attributes.target_completion_date : null}</li>
            <li className="project-text"> <b className="titlespacing">Completion Date:</b> {props.project ? props.project.attributes.completion_date : null}</li>
            <li><Link to={`/projects/${props.project.id}/edit`}>Edit</Link></li>

            <br></br>
            <br></br>
            <h2>Project Comments</h2>
              <li><Link to={`/comments/new`}>Add New Comment</Link></li>
              <br></br>
              {comments.map(comment => (
                <div key={comment.id}>
                  <li><b> Created At: </b> {comment.created_at}</li>
                  <li><b>Text: </b> {comment.text} </li>

                  <li><Link to={`/comments/${comment.id}/edit`}>Edit</Link></li>
                  <br></br>
                </div>
                ))}
          </div>
        </div>


    )
}
const mapStateToProps = state => {
  return {
    clients: state.clientReducer,
  }
}
export default connect(mapStateToProps, null)(Project)