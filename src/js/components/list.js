import React from 'react';
import { Link } from 'react-router'
import { connect }from'react-redux';
import {A_getListForClassAsync,A_getClassId} from '../actions/actions.js';

class List extends React.Component {

    componentDidMount() {
        const {A_getListForClassAsync,A_getClassId,params}=this.props;
        const classid = params.classid;
        A_getClassId(classid);
        A_getListForClassAsync(classid);
    }

    componentWillReceiveProps(nextProps) {
        const {classId,A_getListForClassAsync,A_getClassId,params}=nextProps;
        if (params.classid !== classId) {
            let classid = params.classid;
            A_getClassId(classid);
            A_getListForClassAsync(classid);
        }
    }

    render() {
        const {list}=this.props;
        return (
            <div className="list">
                {list.map((item)=> {
                    return (
                        <div className="item" key={item.Id}>
                            <Link to={'/info/'+item.Id}>
                                <img src="ReportServer.png"/>
                            </Link>
                            <Link to={'/info/'+item.Id}>
                                {item.name}
                            </Link>
                        </div>
                    )
                })}
                <div className="clear"></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.listManage.R_getList,
        classId: state.listManage.R_classId
    }
}
export default connect(
    mapStateToProps,
    {A_getListForClassAsync, A_getClassId}
)(List);
