import React, {Component} from 'react'

export default class LinkForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            link: '',
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

        // Fake submit action
        console.log('Submitted : ' + this.state.link)
        // End Fake
        
        this.setState({
            link : ''
        })

    }

    render() {
        
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type='text' 
                    name='link' 
                    value={this.state.link} 
                    placeholder='example.org'
                    onChange={this.handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}