import React, {Component} from 'react'
// UI AntDesign
import {Form, Button} from "antd";

export default class LogoutForm extends Component {

    onSubmit = event => {
        event.preventDefault()

        this.props.userLogout()
    }

    render() {
        return (
            <div>
                <Form layout='inline' onSubmit={this.onSubmit} className='logout-form'>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >
                            YES
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <a href='/'>
                            <Button type='primary'>
                                NO
                            </Button>
                        </a>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}