import React from 'react';
import Left from './left.js';
require('../../css/style.css');
export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="top">
                    数据决策系统
                </div>
                <div className="content">
                    <Left/>

                    <div className="rightContext">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}