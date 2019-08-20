import React, { Component } from 'react';
// UI AntDesign
import {Form, Icon, Input, Button, Col, Row} from "antd"

export default class LinkForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            full_link: '',
        }
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    onSubmit = event => {
        event.preventDefault()

        this.props.shortenLink(this.state.full_link)

        this.setState({
            full_link: ''
        })
    }

    onCopy = event => {
        let copyLink = document.getElementById('short_link')
        copyLink.select()
        document.execCommand('copy')
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} className='link-form'>
                <Col>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type='text'
                            name='full_link'
                            placeholder='http://example.com'
                            value={this.state.full_link}
                            onChange={this.handleChange}
                            allowClear
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="link-form-button">
                            Shorten
                        </Button>
                    </Form.Item>
                </Col>
                <Row>
                    {this.props.short_link ?
                        <Col xs={{ span: 20, offset: 2}}>
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    id='short_link'
                                    type='text'
                                    name='short_link'
                                    value={`localhost:3000/${this.props.short_link}`}
                                    suffix={
                                        <Icon type="copy" theme="twoTone" onClick={this.onCopy}/>
                                    }
                                />
                            </Form.Item>
                        </Col> : ''
                    }
                </Row>
            </Form>
        )
    }
}
