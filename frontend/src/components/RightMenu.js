import React, {Component} from "react";
// UI AntDesign
import {Menu, Icon} from "antd";

export default class RightMenu extends Component {
    render() {
        return (
            <Menu mode={this.props.mode}>
                {this.props.isAuthenticated ?
                    <Menu.Item key='links'>
                        <a href='/user/'>Your links</a>
                    </Menu.Item> : ''}
                <Menu.Item key='auth'>
                    {this.props.isAuthenticated ?
                        <a href='/logout/'><Icon type="logout" />Logout</a> :
                        <a href='/login/'><Icon type="login" />Login</a>
                    }
                </Menu.Item>
            </Menu>
        )
    }
}