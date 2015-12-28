import React from 'react';
import { Link } from 'react-router';
import AMUIReact from 'amazeui-react';
const Icon = AMUIReact.Icon;
export default class Left extends React.Component {
    render() {
        return (
            <div className="leftMenu">
                <ul>
                    <li><Link to='/admin' activeClassName="selected"><Icon icon="cog"/>数据管理</Link></li>
                    <li><Link to='/list/tj' activeClassName="selected"><Icon icon="area-chart"/>统计数据</Link></li>
                    <li><Link to='/list/zc' activeClassName="selected"><Icon icon="bar-chart"/>整车数据</Link></li>
                    <li><Link to='/list/dc' activeClassName="selected"><Icon icon="line-chart"/>单车数据</Link></li>
                </ul>
            </div>
        )
    }
}