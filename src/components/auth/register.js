import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        console.log(this.state)
        this.state({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() { 
        return ( <div>
            <h1>Register</h1>
            <p>Please fill out this form to create an account</p>

            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="label">
                        <label htmlFor="username">Username:</label>
                    </div>
                    <input type="text" name="username" id="username" placeholder="Enter Username" onChange={this.handleChange} required/>

                </div>

                <div className="row">
                    <div className="label">
                         <label htmlFor="email">Email:</label>
                    </div>
                    <input type="email" name="email" id="email" placeholder="Enter Email" onChange={this.handleChange} required/>
                </div>
               
                <div className="row">
                    <div className="label">
                         <label htmlFor="password">Password:</label>
                    </div>
                    <input type="password" name="password" id="password" placeholder="Enter Password" onChange={this.handleChange} required/>
                </div>

                <div className="row">
                    <input type="submit" value="Register"></input>
                </div>

                <div>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>


            </form>
        </div> );
    }
}
 
export default Register;