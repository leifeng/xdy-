import React from 'react';
import {Link} from 'react-router'
export default class Admin extends React.Component {
    render() {
        return (
            <div className="admin">
                <div className="title">数据管理</div>

                <div className="menu">管理选择：
                    <Link to="/admin/manageClass">类别管理</Link>
                    <Link to="/admin/manageData">内容管理</Link>
                </div>
                <div className="manage">
                    {this.props.children}
                </div>
            </div>
        )
    }
}