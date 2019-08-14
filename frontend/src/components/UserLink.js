import React, {Component} from 'react'

export default class UserLink extends Component {

    componentDidMount() {
        this.props.userLink()
    }

    render() {
        // const items = this.props.user_links.map((item) => {
        //     <li>{item.full_link} | {item.short_link}</li>
        // })
        return (
            /* <ul>{items}</ul> */
            <ul>
                <li>Temp list</li>
            </ul>
        )
    }
}