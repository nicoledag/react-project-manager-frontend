import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import OpenProjects from './OpenProjects'
import { Link } from 'react-router-dom'
import { fetchProjects } from '../../actions/project';

class Buttons extends Component {
    
    constructor(){
        super()
        console.log("state", this.props)
    }


    componentDidMount(){
        this.props.fetchProjects()
    }

  

    onClick(){
        console.log('I have been clicked')
        console.log("onClick", this.props)
        
    }


        

    render() { 
        return ( 
            <div className="btn">
                {/* <Button variant="contained">Default</Button> */}
                {/* <Button onClick={() => this.getOpenProjects(`${this.props}`)} variant="contained" color="primary">
                Open Projects
                </Button> */}
                {/* <Button variant="contained" disabled>
                Disabled
                </Button> */}
                <Link to='/openProjects' className="btn_space" >
                <Button onClick={this.onClick(this.props)} variant="contained" color="primary">
                   Open Projects
                </Button>
                </Link>

                <Link to='/allProjects'className="btn_space" >
                <Button variant="contained" color="primary">
                   All Projects
                </Button>
                </Link>

        </div>
          );
    }
}

const mapStateToProps = state => {
    return {

    }
}
 
export default connect(mapStateToProps, {fetchProjects})(Buttons);