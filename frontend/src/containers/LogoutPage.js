import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
// Local import
import {auth} from '../actions'
// Component
import NavBar from '../components/NavBar';
import LogoutForm from '../components/LogoutForm'

class LogoutPage extends Component {

    render() {
        if (!this.props.isAuthenticated) {
            return <Redirect to='/' />
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
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogout: () => {
            dispatch(auth.userLogout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage)