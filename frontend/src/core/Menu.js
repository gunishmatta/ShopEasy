import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {signout,isAuthenticated} from '../auth/helper/index'

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#FFFFFF" }
    }
    else {
        return { color: "#d1d1d1" }
    }
}


const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-items">
                <Link style={currentTab(history, '/')} className="nav-link" to="/">
                    Home
     </Link>
            </li>

            <li className="nav-items">
                <Link style={currentTab(history, '/cart')} className="nav-link" to="/cart">
                    Cart
     </Link>
            </li>



            <li className="nav-items">
                <Link style={currentTab(history, '/user/dashboard')} className="nav-link" to="/">
                    Dashboard
     </Link>
            </li>


            <li className="nav-items">
                <Link style={currentTab(history, '/admin/dashboard')} className="nav-link" to="/">
                    A. Dashboard
     </Link>
            </li>

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-items">
                        <Link style={currentTab(history, '/signup')} className="nav-link" to="/signup">
                            Signup
     </Link>
                    </li>


                    <li className="nav-items">
                        <Link style={currentTab(history, '/signin')} className="nav-link" to="/signin">
                            Signin
     </Link>
                    </li>
                </Fragment>
            )}
            {isAuthenticated() && (
                <li className="nav-items">
                    <span className="nav-link text-warning"
                        onClick={() => {
                            signout(() => {
                                history.push('/');
                            })
                        }}
                    >
                        Signout
              </span>


                </li>
            )}


        </ul>
    </div>
);

export default withRouter(Menu);