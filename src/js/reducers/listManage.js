import {combineReducers} from 'redux';
import {GET_LIST,GET_LIST_CLASS,GET_CLASS_ID,LIST_IS_EDIT} from '../actions/actions.js';

function R_getList(state = [], action = null) {
    switch (action.type) {
        case GET_LIST:
            return action.list;
        case GET_LIST_CLASS:
            return action.list;
        default:
            return state;
    }
}

function R_classId(state='',action=null){
    switch (action.type){
        case GET_CLASS_ID:
            return action.classId;
        default:
            return state;
    }
}

function R_listIsEdit(state=false,action=null){
    switch (action.type){
        case LIST_IS_EDIT:
            return action.isEdit;
        default:
            return state;
    }
}
const listManage = combineReducers({
    R_getList,
    R_classId,
    R_listIsEdit
});

module.exports = listManage;