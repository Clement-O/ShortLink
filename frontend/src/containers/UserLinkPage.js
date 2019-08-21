import React, {Component} from 'react'
import {connect} from 'react-redux'
// Local import
import {getUserLink} from '../actions'
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
                <UserLink getUserLink={this.props.getUserLink} user_links={this.props.user_links}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user_links: state.getUserLink.user_links
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserLink: () => {
            dispatch(getUserLink.getUserLink())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLinkPage)