import {combineReducers} from 'redux';
import{ GET_INFO} from '../actions/actions.js'

function R_getInfo(state = '', action = null) {
    switch (action.type) {
        case GET_INFO:
            return action.link;
        default:
            return state;
    }
}

const infoManage = combineReducers({
    R_getInfo
});
module.exports = infoManage;