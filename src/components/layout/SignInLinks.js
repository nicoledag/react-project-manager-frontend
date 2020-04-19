import React from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux'
import { logout } from '../../actions/currentUser'
import { withRouter } from 'react-router'


    const SignInLinks = (props) => {

        // console.log(props);

            return (
                <nav className="my-navbar">
                   <li><NavLink to="/projects" className="my-nav-links products-desktop">Project Dashboard</NavLink></li> 

                    <ul className="main-nav" id="js-menu">
                    <div className="dropdown">
                            <button className="dropbtn">+<FontAwesomeIcon icon={faCaretDown}/></button>
                            <div className="dropdown-content">
                                <li><NavLink to="/projects/new" className="my-nav-links">New Project</NavLink></li>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn">hello {props.currentUser.attributes.username}! <FontAwesomeIcon icon={faCaretDown}/></button>
                            <div className="dropdown-content">
                            <li><NavLink to="/projects" className="my-nav-links products-mobile">Product Dashboard</NavLink></li>                            
                                <li><NavLink to="/clients" className="my-nav-links">Clients</NavLink></li> 
                                <li><button onClick={props.logOut}  className="nav-button">Logout</button></li>
                            </div>
                        </div>
                    </ul>
              </nav>
            )
    }

    const mapStateToProps = ({ currentUser }) => {
        return {
          currentUser,
          loggedIn: !!currentUser
        }
      }
     
    const mapDispatchToProps = (dispatch, props) => {
        return {
            logOut: () => { dispatch(logout()) 
            props.history.push('/projects');
            }
        }
    }

    

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInLinks));