import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Buttons extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                Primary
                </Button>
                <Button variant="contained" color="secondary">
                Secondary
                </Button>
                <Button variant="contained" disabled>
                Disabled
                </Button>
                {/* <Button variant="contained" color="primary" href="#contained-buttons">
                Link
                </Button> */}
        </div>
          );
    }
}
 
export default Buttons;