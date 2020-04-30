import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Project = (props) => {

    console.log("project", props)

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

      // console.log("comments", comments)

      
    //  let targetCompletionDate = new Date(`${props.project.attributes.target_completion_date}`).toLocaleString().split(',')[0]

    //  let completionDate = new Date(`${props.project.attributes.completion_date}`).toLocaleString().split(',')[0]


     return (
        <div className="container-form">
          <div className="data-project">
            <h2>Project Information</h2>
            <div className="proj_border">
              <li className="project-text"> <b className="titlespacing">Project Name:</b> {props.project ? props.project.attributes.name : null}</li>
              <li className="project-text"> <b className="titlespacing">Description:</b> {props.project ? props.project.attributes.desc : null}</li>
              <li className="project-text"> <b className="titlespacing">Client:</b> {client ? client.attributes.name : null}</li>
            
              <li className="project-text"> <b className="titlespacing">Budget: </b> ${props.project ? props.project.attributes.budget : null}</li>
              <li className="project-text"> <b className="titlespacing">Quantity:</b> {props.project ? props.project.attributes.quantity : null}</li>
              <li className="project-text"> <b className="titlespacing">End Destination:</b> {props.project ? props.project.attributes.end_destination : null}</li>

              
              <li className="project-text"> <b className="titlespacing">Target Completion Date:</b> {props.project ? props.project.attributes.target_completion_date : null}</li>
              <li className="project-text"> <b className="titlespacing">Completion Date:</b> {props.project.attributes.completion_date === null ? "OPEN" : props.project.attributes.completion_date}</li>
              
              <div className="flex">
                <li><Link to={`/projects/${props.project.id}/edit`}>Edit Project</Link></li>
            
                <li><Link to={`/projects/${props.project.id}/delete`}>Delete Project</Link></li>
              </div>
              <br></br>
              <span className="color">Warning: Deleting a project will delete the associated comments.</span>

            </div>
            <br></br>
            <br></br>
            <h2>Project Comments</h2>
            <div className="flex">
              <li><Link to={`/comments/new`}>New Comment</Link></li>
             </div>
              {comments.map(comment => (
                <div className="proj_border" key={comment.id}>
                  <li><b> Created At: </b> {comment.created_at}</li>
                  <li><b>Text: </b> {comment.text} </li>
                  <div className="flex">
                    <li><Link to={`/comments/${comment.id}/edit`}>Edit Comment</Link></li>
                    <li><Link to={`/comments/${comment.id}/delete`}>Delete Comment</Link></li>
                  </div>
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