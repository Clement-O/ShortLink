import React, { Component } from 'react';
import {connect} from 'react-redux';
// Local import
import {auth} from '../actions'
// Components
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";


class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: props.username,
            password: props.password,
        }
    }

    render() {
        // Add a store.subscribe to get the local store and redirect (how) ?
        // Pass the props isAuthenticated and redirect (how) ?
        // Other way ?
        if (!!localStorage.getItem('token_access')) {
            return (
                <div>
                    <p>Do a redirection to home page</p>
                </div>
            )
        } else {
            return (
                <div>
                    <NavBar />
                    <h1>Login Page</h1>
                    <LoginForm userLogin={this.props.userLogin}/>
                </div>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        username: state.username,
        password: state.password,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (creds) => {
            dispatch(auth.userLogin(creds))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)