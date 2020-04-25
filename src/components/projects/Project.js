import React from 'react';
import { Link } from 'react-router-dom'

const Project = (props) => {

    console.log("project", props)

    return (
        <div className="project_page">
          <h2>Project Page</h2>
          <li className="project-text"> <b className="titlespacing">Name:</b> {props.project ? props.project.attributes.name : null}</li>
          <li className="project-text"> <b className="titlespacing">Description:</b> {props.project ? props.project.attributes.desc : null}</li>
          <li className="project-text"> <b className="titlespacing">Client:</b> {props.project ? props.project.attributes.client_id : null}</li>
          <li className="project-text"> <b className="titlespacing">Target Completion Date:</b> {props.project ? props.project.attributes.target_completion_date : null}</li>
          <li className="project-text"> <b className="titlespacing">Completion Date:</b> {props.project ? props.project.attributes.completion_date : null}</li>
        </div>
    )
}

export default Project