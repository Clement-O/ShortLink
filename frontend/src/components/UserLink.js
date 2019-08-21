import React, {Component} from 'react'
// UI AntDesign
import {Table} from 'antd'

export default class UserLink extends Component {

    componentDidMount() {
        this.props.getUserLink()
    }

    render() {
        if (this.props.user_links === undefined) {
            return null
        }
        const columns = [{
            title: 'Original shortenLink',
            dataIndex: 'full_link',
            key: 'full_link',
            render: text => <a href={text}>{text}</a>
        },
        {
            title: 'Shortened shortenLink',
            dataIndex: 'short_link',
            key: 'short_link',
            render: text => <a href={`localhost:3000/${text}`}>{text}</a>
        },
        {
            title: 'Global redirect count',
            dataIndex: 'redirect_count',
            key: 'redirect_count',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.redirect_count - b.redirect_count
        }]
        return (
            <Table dataSource={this.props.user_links} columns={columns} />
        )
    }
}