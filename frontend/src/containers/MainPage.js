import React, { Component } from 'react';
import {connect} from 'react-redux';
// Local import
import {link} from '../actions'
// Components
import NavBar from "../components/NavBar";
import LinkForm from '../components/LinkForm'

class MainPage extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <h1>Shorten link app</h1>
                <LinkForm shortenLink={this.props.shortenLink}/>
                <h2>{this.props.short_link ? this.props.short_link : this.props.errorMessage}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        short_link: state.link.short_link,
        errorMessage: state.link.errorMessage,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        shortenLink: (full_link) => {
            dispatch(link.shortenLink(full_link))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)