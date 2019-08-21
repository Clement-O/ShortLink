import React, {Component} from 'react'
import {connect} from 'react-redux'
// Components
import RightMenu from '../components/RightMenu'
// UI AntDesign
import {Button, Drawer} from 'antd'
import '../css/NavBar.css'

class NavBar extends Component {
    state = {
        current: 'links',
        visible: false
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        })
    }

    onClose = () => {
        this.setState({
            visible: false,
        })
    }

    render() {
        return (
            <nav className="menuBar">
                <div className="logo">
                    <a href='/'>Short Link</a>
                </div>
                <div className="menuCon">
                    <div className="rightMenu">
                        <RightMenu
                            mode='horizontal'
                            isAuthenticated={this.props.isAuthenticated}
                        />
                    </div>
                    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                        <span className="barsBtn"></span>
                    </Button>
                    <Drawer
                        title='Menu'
                        placement='top'
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <RightMenu
                            mode='vertical'
                            isAuthenticated={this.props.isAuthenticated}
                        />
                    </Drawer>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.logIn.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
