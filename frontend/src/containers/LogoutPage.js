import React, {Component} from 'react'
import {connect} from 'react-redux'
// Local import
import {auth} from '../actions'
// Component
import NavBar from '../components/NavBar';
import LogoutForm from '../components/LogoutForm'

class LogoutPage extends Component {

    render() {
        // Add a store.subscribe to get the local store and redirect (how) ?
        // Pass the props isAuthenticated and redirect (how) ?
        // Other way ?
        if (!!!localStorage.getItem('token_access')) {
            return (
                <div>
                    <p>Do a redirection to home page</p>
                </div>
            )
        } else {
            return (
                <div>
                    <NavBar/>
                    <h1>Logout Page</h1>
                    <LogoutForm userLogout={this.props.userLogout}/>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        userLogout: () => {
            dispatch(auth.userLogout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage)