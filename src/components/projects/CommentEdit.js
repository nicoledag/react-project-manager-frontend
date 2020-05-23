import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editComment } from '../../actions/project'
import { Redirect } from 'react-router-dom'
import { fetchComments } from '../../actions/comment'

class CommentEdit extends Component {
    constructor(props){
        super(props)
        console.log("commentprops", this.props)
        
        this.state = {
            text: `${this.props ? this.props.comment.text : ""}`, 
        }
    }

    componentDidMount() {
        this.props.fetchComments()
      }
    

    handleChange = e =>{
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        let comment = {...this.state, id: this.props.comment.comment_id }
        this.props.editComment(comment);
        let project = this.props.comment.project_id
        this.props.history.push(`/projects/${project}`);
        this.setState({
            text: '',
        })

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
                                <input type="text" name="text" id="text" value={this.state.text} onChange={this.handleChange} required/>
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
        comments: state.commentReducer,
    }
}
 
export default connect(mapStateToProps, { editComment, fetchComments })(CommentEdit);