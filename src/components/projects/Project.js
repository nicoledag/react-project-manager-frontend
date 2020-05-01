import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPortal } from 'react-dom';

class Project extends Component {
  constructor(props){
    super(props)
    // console.log("project props", props)
  }
  render() { 

    let client = this.props.clients.clients ? this.props.clients.clients.filter(client => parseInt(client.id) === this.props.project.attributes.client_id)[0] : null
    // console.log("client", client)

    function createData(id, text, created_at) {
      return { id, text, created_at };
    }
    let comments = this.props.project.attributes.comments ? this.props.project.attributes.comments.map(comment => 
      createData(`${comment.comment_id}`,`${comment.text}` , new Date(`${comment.created_at}`).toLocaleString().split(',')[0]) 
    )
    : null

    // console.log("comments", comments)

    return ( 
        <div className="container-form">
          <div className="data-project">
            <h2>Project Information</h2>
            <div className="proj_border">
              <li className="project-text"> <b className="titlespacing">Project Name:</b> {this.props.project ? this.props.project.attributes.name : null}</li>
              <li className="project-text"> <b className="titlespacing">Description:</b> {this.props.project ? this.props.project.attributes.desc : null}</li>
              <li className="project-text"> <b className="titlespacing">Client:</b> {client ? client.attributes.name : null}</li>
            
              <li className="project-text"> <b className="titlespacing">Budget: </b> ${this.props.project ? this.props.project.attributes.budget : null}</li>
              <li className="project-text"> <b className="titlespacing">Quantity:</b> {this.props.project ? this.props.project.attributes.quantity : null}</li>
              <li className="project-text"> <b className="titlespacing">End Destination:</b> {this.props.project ? this.props.project.attributes.end_destination : null}</li>

              
              <li className="project-text"> <b className="titlespacing">Target Completion Date:</b> {this.props.project ? this.props.project.attributes.target_completion_date : null}</li>
              <li className="project-text"> <b className="titlespacing">Completion Date:</b> {this.props.project.attributes.completion_date === null ? "OPEN" : this.props.project.attributes.completion_date}</li>
              
              <div className="flex">
                <li><Link to={`/projects/${this.props.project.id}/edit`}>Edit Project</Link></li>
            
                <li><Link to={`/projects/${this.props.project.id}/delete`}>Delete Project</Link></li>
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


      );
  }
}
 

const mapStateToProps = state => {
  return {
    clients: state.clientReducer,
  }
}
export default connect(mapStateToProps, null)(Project)





