import React, {Component} from 'react'
// Local import
import {store} from '../store'


export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuthenticated: store.getState().auth.isAuthenticated,
        }

        // Is this the best way to do it ?
        // Should I listen to userLogin & userLogout instead ?
        store.subscribe(() => {
            this.setState({
                isAuthenticated: store.getState().auth.isAuthenticated,
            })
        })
    }

    render() {
        return (
            <nav>
                <a href="/">Shorten Link</a>
                <ul>
                    <li>
                        {!this.state.isAuthenticated ? <a href="/login">Login</a> : <a href="/logout">Logout</a>}
                    </li>
                </ul>
            </nav>
        )
    }
}

