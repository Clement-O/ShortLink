import React, { Component } from 'react';
import {connect} from 'react-redux';
// Local import
import {link} from '../actions'
// Components
import NavBar from "./NavBar";
import LinkForm from '../components/LinkForm'
// UI AntDesign
import '../css/Shared.css'
import '../css/MainPage.css'

class MainPage extends Component {

    onCopy = event => {
        let copyLink = document.getElementById('link')
        let h1Text = copyLink.textContent
        h1Text.select()
        document.execCommand('copy')
    }

    render() {
        return (
            <div>
                <NavBar />
                <h1 className='title'>Short link</h1>
                <LinkForm shortenLink={this.props.shortenLink} short_link={this.props.short_link}/>
                {this.props.errorMessage ? <p className='link-error'>{this.props.errorMessage}</p> : ''}
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