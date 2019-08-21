import React, { Component } from 'react';
import {connect} from 'react-redux';
// Local import
import {redirectLink} from '../actions'
// Components
import NavBar from "./NavBar";

class RedirectPage extends Component {

    componentDidMount() {
        this.props.redirectLink(this.props.match.params.short_link)
    }

    render() {
        if (this.props.isRedirected) {
         return window.location.assign(`${this.props.full_link}`)
        } else {
            return (
                <div>
                    <NavBar />
                    <h1>Redirection error</h1>
                    <h2>{this.props.errorMessage}</h2>
                </div>
            )}
    }
}

const mapStateToProps = state => {
    return {
        isRedirected: state.redirectLink.isRedirected,
        full_link: state.redirectLink.full_link,
        errorMessage: state.redirectLink.errorMessage,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        redirectLink: (short_link) => {
            dispatch(redirectLink.redirectLink(short_link))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedirectPage)