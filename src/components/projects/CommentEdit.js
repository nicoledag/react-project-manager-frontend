import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { createComment } from '../../actions/project'
import { Redirect } from 'react-router-dom'

class CommentEdit extends Component {
    constructor(props){
        super(props)
        console.log("commentprops", this.props)
        this.state = {
            // text: `${this.props ? this.props.comments.attributes.name : ""}`, 
        }
    }


    handleChange = e =>{
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    handleSubmit = e => {
        // e.preventDefault();
        // let projectId = parseInt(this.props.match.params.id)
        // // console.log(projectId)
        // // console.log(this.state)
        // let comment = {...this.state, id: projectId }
        // // console.log(comment)
        // this.props.createComment(comment);
        // this.props.history.push(`/projects/${projectId}`);

        // this.setState({
        //     text: '',
        // })
    }

    render() { 
        const { loggedIn } = this.props;
        if (!loggedIn) return <Redirect to='/' />

        return ( 
            <div className="container-form">
                <div className="middle-container">
                    <h1>Edit Comment</h1>

                    <form onSubmit={this.handleSubmit}>
                        <div className="row"> 
                            <div className="label">    
                                <label htmlFor="text">Comment Text:  </label>
                            </div>  
                                <input type="text" name="text" id="text" placeholder="Enter Comment Text" onChange={this.handleChange} required/>
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

const mapStateToProps = state => {
    return {
        loggedIn: !!state.currentUser,
    }
}
 
export default connect(mapStateToProps, {  })(CommentEdit);