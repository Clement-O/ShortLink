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
            <div>
                <form onSubmit={this.onSubmit}>
                    <button type='submit'>YES</button>
                </form>
                <a href='/'><button>NO</button></a>
            </div>
        );
    }
}