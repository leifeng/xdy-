import React from 'react';
import {connect} from 'react-redux';
import {A_getInfoAsync} from '../actions/actions.js';

class Info extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
        const {A_getInfoAsync,params}=this.props;
        const listid = params.listid;
        A_getInfoAsync(listid);
    }

    render() {
        const {link}=this.props;
        return (
            <div className="frame">
                <div className="title">报表详情</div>
                <iframe src={link} frameBorder="0" width="100%" height="100%" scrolling="0"></iframe>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        link: state.infoManage.R_getInfo
    }
}
export default connect(
    mapStateToProps,
    {A_getInfoAsync}
)(Info)