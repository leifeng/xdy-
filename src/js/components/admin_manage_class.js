import React from 'react';
import { connect }from'react-redux';
import {A_delClass_async, A_editClass_async,  A_addClass_async, A_setIsEdit, A_setClassId,A_reDelClass_async} from '../actions/actions.js'
import AMUIReact from 'amazeui-react';
const {Button,Icon,Input,List,ListItem,Badge} = AMUIReact;

class manageClass extends React.Component {

    render() {
        const {classList,isEdit,A_delClass_async,A_reDelClass_async}=this.props;
        var btn;
        if (isEdit) {
            btn = <div><Button onClick={e=>this.handleEditClick(e)} amStyle="warning" amSize="xs"><Icon
                icon="file">&nbsp;保存</Icon></Button>&nbsp;<Button onClick={()=>this.editHandle(-1,true)} amStyle="danger" amSize="xs"><Icon
                icon="close">&nbsp;取消</Icon></Button></div>;
        } else {
            btn = <Button onClick={e=>this.handleAddClick(e)} amStyle="success" amSize="xs"><Icon
                icon="plus">&nbsp;添加</Icon></Button>;
        }

        return (
            <div>
                <div className="addClass">
                    <input type="text" placeholder="分类名称" ref='input' className="classInput"/>
                    {btn}
                </div>
                <List border static>
                    {classList.map((item)=> {
                        return (
                            <ListItem key={item.Id}>
                                {item.flag===1? <Badge amStyle="danger" onClick={()=>A_delClass_async(item.Id)}>删除</Badge>:<Badge amStyle="warning" onClick={()=>A_reDelClass_async(item.Id)}>恢复</Badge>}
                               
                                <Badge amStyle="success" onClick={()=>this.editHandle(item.Id,true)}>编辑</Badge>
                                {item.name}
                            </ListItem>
                        )
                    })}

                </List>
            </div>
        )
    }

    editHandle(id,bool) {
        const {A_setIsEdit,A_setClassId}=this.props;
        A_setClassId(id);
        A_setIsEdit(bool);
    }

    handleEditClick(e) {
        const {A_editClass_async}=this.props;
        const node = this.refs.input;
        const text = node.value.trim();
        A_editClass_async(text);
        node.value = '';
    }

    handleAddClick(e) {
        const {A_addClass_async}=this.props;
        const node = this.refs.input;
        const text = node.value.trim();
        if(text==''){
            alert('先输入类别名称！');
            return
        }
        A_addClass_async(text);
        node.value = '';
    }
}


function mapStateToProps(state) {
    return {
        classList: state.classManage.R_classList,
        isEdit: state.classManage.R_isEdit,
        classId: state.classManage.R_classId
    }
}
export default connect(
    mapStateToProps,
    {A_delClass_async, A_editClass_async,A_addClass_async, A_setIsEdit, A_setClassId,A_reDelClass_async}
)(manageClass);