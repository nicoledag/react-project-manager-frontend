import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import OpenProjects from './OpenProjects'
import { Link } from 'react-router-dom'

class Buttons extends Component {
    
    

    getOpenProjects(){
        console.log('I have been clicked')
        console.log(this.props)
        this.props.projectsList.history.push(`/projects`); 
        // return <OpenProjects />
    }

    render() { 
        return ( 
            <div>
                {/* <Button variant="contained">Default</Button> */}
                {/* <Button onClick={() => this.getOpenProjects(`${this.props}`)} variant="contained" color="primary">
                Open Projects
                </Button> */}
                {/* <Button variant="contained" disabled>
                Disabled
                </Button> */}
                <Link to='/openProjects'>
                <Button variant="contained" color="primary">
                   Open Projects
                </Button>
                </Link>

                <Link to='/allProjects'>
                <Button variant="contained" color="secondary">
                   Open Projects
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
 
export default connect(mapStateToProps)(Buttons);