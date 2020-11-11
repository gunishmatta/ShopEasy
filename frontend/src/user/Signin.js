import React, { useState } from 'react';
import Base from '../core/Base';
import { Link, Redirect } from 'react-router-dom';

import { signin, authenticate, isAuthenticated } from '../auth/helper/index'

const Signin = () => {

    const [values, setValues] = useState(
        {
            email: "",
            password: "",
            success: false,
            error: "",
            loading: false,
            didRedirect: false
        });

    const { email, password, success, error, loading, didRedirect } = values;

    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true })
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false })
            }
            else {
                authenticate(data, () => {
                    setValues({ ...values, didRedirect: true })
                })
            }
        }).catch(console.log("Signin Failed"))
    }

    const performRedirect = () => {
    
    //TODO:  Redirect work to be completed
        if (didRedirect) {
            if (user && user.role == 1) {
                return <p>Redirect to admin</p>
            }
        }
        else {
            return <p>Redirect to user dashboard </p>
        }

        if (isAuthenticated) {
            return <Redirect to="/" />;
        }
    }

    const loadingMessage = () => {
        return (
            loading &&
            (
                <div className="row">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        );
    };

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}
                    >
                        {error}
                    </div>
                </div>
            </div>
        );
    };


    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>

                        <div className="form-group">
                            <label className="text-light">
                                Email
                        </label>
                            <input value={email}
                                type="text"
                                className="form-control"
                                onChange={handleChange("email")}
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-light">
                                Password
                        </label>
                            <input value={password}
                                type="password"
                                className="form-control"
                                onChange={handleChange("password")}
                            />
                        </div>
                        <button className="btn btn-success btn-block">Login</button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <Base title="Sign in Page" description="Page for user to signin">
            <h1> Signin Works</h1>
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}

        </Base>
    )
}

export default Signin;
