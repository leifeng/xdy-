import React from 'react';
export default class Info extends React.Component {
    render() {
        return (
            <div className="frame">
                <div className="title">报表详情</div>
                <iframe src={'http://10.10.10.196/ReportServer/Pages/ReportViewer.aspx?%2f报表项目%2f'+decodeURIComponent(this.props.params.url)+'&rs:Command=Render'} frameBorder="0" width="100%" height="100%" scrolling="0"></iframe>
            </div>
        )
    }
}