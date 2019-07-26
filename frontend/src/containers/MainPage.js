import React, { Component } from 'react';
import {connect} from 'react-redux';

import LinkForm from '../components/LinkForm'
import {link} from '../actions'

import {store} from '../store'

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            short_link: props.short_link,
        }

        store.subscribe(() => {
            console.log('subscribe ' + store.getState().short_link)
            this.setState({
                short_link: store.getState().short_link
            })
        })
    }

    render() {
        console.log(this.state.short_link + ' <State - Store> ' + store)
        return (
            <div>
                <h1>Shorten link app</h1>
                <LinkForm shortenLink={this.props.shortenLink}/>
                <h2>{this.state.short_link ? this.state.short_link : 'None'}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        full_link: state.full_link,
        short_link: state.short_link,
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