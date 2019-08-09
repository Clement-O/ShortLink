import React, {Component} from 'react'

export default class LoginForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        this.props.userLogin(this.state)
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type='text'
                    name='username'
                    value={this.state.username}
                    placeholder='Your username'
                    onChange={this.handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
