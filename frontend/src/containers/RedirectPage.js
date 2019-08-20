import React, { Component } from 'react';
import {connect} from 'react-redux';
// Local import
import {redirect} from '../actions'
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
        isRedirected: state.redirect.isRedirected,
        full_link: state.redirect.full_link,
        errorMessage: state.redirect.errorMessage,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        redirectLink: (short_link) => {
            dispatch(redirect.redirectLink(short_link))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedirectPage)