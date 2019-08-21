import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
// Local import
import {logIn} from '../actions'
// Components
import NavBar from "./NavBar";
import LoginForm from "../components/LoginForm";
// UI AntDesign
import '../css/Shared.css'
import '../css/Login.css'

class LoginPage extends Component {

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />
        } else {
            return (
                <div>
                    <NavBar />
                    <h1 className='title'>Login Page</h1>
                    <LoginForm userLogin={this.props.userLogin} />
                    {this.props.errorMessage ?
                        <p className='login-error'>
                            {this.props.errorMessage}
                        </p> : ''}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.logIn.isAuthenticated,
        errorMessage: state.logIn.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (creds) => {
            dispatch(logIn.userLogin(creds))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)