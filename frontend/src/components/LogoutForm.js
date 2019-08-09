import React, {Component} from 'react'

export default class LogoutForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event) {
        event.preventDefault()

        this.props.userLogout()
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <button type='submit'>YES</button>
                <button><a href='/'>NO</a></button>
            </form>
        );
    }
}