import React from 'react';
import { Link } from 'react-router';
import { connect }from'react-redux';
import {A_getAsyncClass} from '../actions/actions.js'
import AMUIReact from 'amazeui-react';
const Icon = AMUIReact.Icon;
 class Left extends React.Component {
     componentDidMount() {
         const {A_getAsyncClass}=this.props;
         A_getAsyncClass();
     }

    render() {
        const {classList}=this.props;
        return (
            <div className="leftMenu">
                <ul>
                    <li><Link to='/admin' activeClassName="selected"><Icon icon="cog"/>数据管理</Link></li>
                    {classList.map((item)=>{
                        return  <li key={item.Id}><Link to={'/list/'+item.Id} activeClassName="selected"><Icon icon="area-chart"/>{item.name}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        classList: state.classManage.R_classList
    }
}
export default connect(
    mapStateToProps,
    {A_getAsyncClass}
)(Left);