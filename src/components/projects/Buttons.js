import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Buttons extends Component {
    state = {  }

    openProjects(){
        console.log('I have been clicked')
    }

    render() { 
        return ( 
            <div>
                {/* <Button variant="contained">Default</Button> */}
                <Button onClick={this.openProjects} variant="contained" color="primary">
                Open Projects
                </Button>
                <Button variant="contained" color="secondary">
                All Projects
                </Button>
                {/* <Button variant="contained" disabled>
                Disabled
                </Button> */}
                {/* <Button variant="contained" color="primary" href="#contained-buttons">
                Link
                </Button> */}
        </div>
          );
    }
}
 
export default Buttons;