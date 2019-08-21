import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
// Local import
import {refreshToken, verifyToken} from "../actions";

class AuthenticatedRoute extends Component {

    componentWillMount() {
        if (this.props.isValidated === undefined) {
            if (this.props.isAuthenticated) {
                this.props.verifyToken(localStorage.getItem('token_access'))
            }
        }
    }

    render() {
        if (!this.props.isValidated) {
            if (this.props.isAuthenticated) {
                this.props.refreshToken(localStorage.getItem('token_refresh'))
                return null
            }
            // If non authenticated but on the main page.
            if (this.props.component.WrappedComponent.name === 'MainPage') {
                return (<Route exact path={this.props.path} component={this.props.component}/>)
            }
            // If non authenticated and not on the main page, forbid access
            return (<Redirect to='/'/>)
        } else {
            // Else, (if validated) redirect to the desired page
            return (<Route exact path={this.props.path} component={this.props.component} />)
        }
    }
}



const mapStateToProps = state => {
    return {
        isAuthenticated: state.logIn.isAuthenticated,
        isValidated: state.verifyToken.isValidated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        verifyToken: (token_access) => {
            dispatch(verifyToken.verifyToken(token_access))
        },
        refreshToken: (token_refresh) => {
            dispatch(refreshToken.refreshToken(token_refresh))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedRoute)