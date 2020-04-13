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
                   <li><NavLink to="/" className="my-nav-links products-desktop">Product Categories</NavLink></li> 

                    <ul className="main-nav" id="js-menu">
                    <div className="dropdown">
                            <button className="dropbtn">+<FontAwesomeIcon icon={faCaretDown}/></button>
                            <div className="dropdown-content">
                                <li><NavLink to="/" className="my-nav-links products-mobile">Product Categories</NavLink></li> 
                                <li><NavLink to="/businesses/new" className="my-nav-links">New Project</NavLink></li>
                                <li><NavLink to="/businesses/new" className="my-nav-links">New Client</NavLink></li>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn">hello {props.currentUser.attributes.username}! <FontAwesomeIcon icon={faCaretDown}/></button>
                            <div className="dropdown-content">
                            <li><NavLink to="/businesses/new" className="my-nav-links">My Projects</NavLink></li>
                                <li><NavLink to="/clients" className="my-nav-links">Clients</NavLink></li> 
                                <li><NavLink to="/" className="my-nav-links products-mobile">Product Categories</NavLink></li>                            
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
            props.history.push('/');
            }
        }
    }

    

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInLinks));