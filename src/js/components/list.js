import React from 'react';
import { Link } from 'react-router'
var imgUrl = require('../../images/ReportServer.png');
export default class List extends React.Component {

    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    componentWillReceiveProps(nextProps) {
        const typee = nextProps.params.type;
        this.setState({list: this.props.list[typee]});
    }

    componentDidMount() {
        const typee = this.props.params.type;
        this.setState({list: this.props.list[typee]});
    }

    render() {
        return (
            <div className="list">
                {this.state.list.map((item, index)=> {
                    return (
                        <div className="item" key={index}>
                            <Link to={'/info/'+encodeURIComponent(item)}>
                                <img src={imgUrl}/>
                            </Link>
                            <Link to={'/info/'+encodeURIComponent(item)}>
                                {item}
                            </Link>
                        </div>
                    )
                })}
                <div className="clear"></div>
            </div>
        )
    }
}
List.defaultProps = {
    list: {
        zc: ['三元锂充电和放电时对比曲线', '不同材料电池容量对比', '不同电池充电电压对比曲线', '不同电池充电电流对比曲线', '不同电池放电电压对比曲线', '充电时压差与SOC关系', '充电时总电压与SOC关系', '充电时总电压与温度关系', '充电时总电压标准差与SOC关系', '充电电压随时间的变化曲线', '单位安时所对应充电电量', '放电时压差与SOC关系', '放电时总电压与温度关系', '放电时总电压标准差与SOC关系', '放电电时总电压与SOC关系', '电池安时数与充电电量', '磷酸铁锂充电和放电时对比曲线', '锰酸锂充电和放电时对比曲线'],
        dc: ['最近7天充电电压随soc的变化', '最近7天压差大于0.015v的概率', '最近7天压差的变化状况', '最近7天放电电压随soc的变化', '最近7天温度的标准差', '最近7天的平均压差', '最近7天的平均温度', '最近7天的最大压差', '最近7天行驶时间', '充电结束时SOC的概率分布', '充电起始时SOC的概率分布'],
        tj: ['电池厂家', '电池材料', '车辆平均行驶时间']
    }
};