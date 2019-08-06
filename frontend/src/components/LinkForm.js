import React, { Component } from 'react';

export default class LinkForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            full_link: '',
            short_link: '',
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

    onSubmit = (event) => {
        event.preventDefault()

        this.props.shortenLink(this.state.full_link)

        this.setState((updater) => ({
            ...this.state,
            full_link : ''
        }))
    }

    render() {
        
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type='text' 
                    name='full_link' 
                    value={this.state.full_link} 
                    placeholder='http://example.org'
                    onChange={this.handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
