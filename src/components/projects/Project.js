import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteProject } from '../../actions/project'
import { deleteComment } from '../../actions/project'

class Project extends Component {
  constructor(props){
    super(props)
    // console.log("project props", props)
  }


  handleDelete = (projectId) => {
    // console.log("projectId", projectId)
      this.props.deleteProject(projectId);
      this.props.history.push(`/projects`);
  }

  handleDeleteComment = (commentId) => {
    let projectId = parseInt(this.props.project.id)
    // console.log("commentId", commentId)
    this.props.deleteComment(commentId, projectId);
    // this.props.history.push(`/projects`);
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
                <button onClick={() => this.handleDelete(`${this.props.project.id}`)} className="delete-button">Delete Project</button>
              </div>
            </div>
            <br></br>
            <br></br>
            <h2>Project Comments</h2>
            <div className="flex">
              <li><Link to={`/projects/${this.props.project.id}/comments/new`}>New Comment</Link></li>
             </div>

              {comments.map(comment => (
                <div className="proj_border" key={comment.id}>
                  <li><b> Created At: </b> {comment.created_at}</li>
                  <li><b>Text: </b> {comment.text} </li>
                  <div className="flex">
                    <li><Link to={`/comments/${comment.id}/edit`}>Edit Comment</Link></li>
                    <button onClick={() => this.handleDeleteComment(`${comment.id}`)} className="delete-button">Delete Comment</button>
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
export default connect(mapStateToProps, { deleteProject, deleteComment })(Project)





