import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Project = (props) => {

    console.log("project", props)

    

  // console.log(props.clients.clients)
  // console.log(props.project.attributes.client_id)
    let client = props.clients.clients ? props.clients.clients.filter(client => parseInt(client.id) === props.project.attributes.client_id)[0] : null
    console.log("client", client)

    return (
        <div className="project_page">
          <h2>Project Page</h2>
          <li className="project-text"> <b className="titlespacing">Name:</b> {props.project ? props.project.attributes.name : null}</li>
          <li className="project-text"> <b className="titlespacing">Description:</b> {props.project ? props.project.attributes.desc : null}</li>
          <li className="project-text"> <b className="titlespacing">Client:</b> {client ? client.attributes.name : null}</li>
          <li className="project-text"> <b className="titlespacing">Target Completion Date:</b> {props.project ? props.project.attributes.target_completion_date : null}</li>
          <li className="project-text"> <b className="titlespacing">Completion Date:</b> {props.project ? props.project.attributes.completion_date : null}</li>
        </div>
    )
}
const mapStateToProps = state => {
  return {
    clients: state.clientReducer,
  }
}
export default connect(mapStateToProps, null)(Project)