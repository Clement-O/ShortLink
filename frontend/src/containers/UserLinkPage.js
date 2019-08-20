import React, {Component} from 'react'
import {connect} from 'react-redux'
// Local import
import {user} from '../actions'
// Component
import NavBar from './NavBar';
import UserLink from "../components/UserLink";
// UI AntDesing
import '../css/Shared.css'

class UserLinkPage extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <h1 className='title'>User Links Page</h1>
                <UserLink userLink={this.props.userLink} user_links={this.props.user_links}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user_links: state.user.user_links
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLink: () => {
            dispatch(user.userLink())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLinkPage)