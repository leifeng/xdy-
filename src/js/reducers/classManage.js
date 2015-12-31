import {combineReducers} from 'redux';
import {GET_CLASS_ALL,ADD_CLASS,DEL_CLASS,EDIT_CLASS,IS_EDIT,ClASS_ID} from '../actions/actions.js'


function R_classList(state = [], action = null) {
    switch (action.type) {
        case GET_CLASS_ALL:
            return action.list;
        default:
            return state;
    }
}
function R_isEdit(state = false, action = null) {
    switch (action.type) {
        case IS_EDIT:
            return action.isEdit;
        default:
            return state;
    }
}
function R_classId(state = -1, action = null) {
    switch (action.type) {
        case ClASS_ID:
            return action.id;
        default:
            return state;
    }
}
const classManage = combineReducers({
    R_classList,
    R_isEdit,
    R_classId
});

module.exports = classManage;
