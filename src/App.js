import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/projects')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() { 
    return ( <div>

    </div> );
  }
}
 
export default App;