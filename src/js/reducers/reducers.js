import {combineReducers} from 'redux';
import {   routerStateReducer  } from 'redux-router';
import {GET_CLASS,ADD_CLASS,DEL_CLASS,EDIT_CLASS} from '../actions/actions.js'

function classManage(state=[], action=null) {
    switch (action.type) {
        case GET_CLASS:
            return state;
        default:
            return state;
    }
}


const reducer = combineReducers({
    router: routerStateReducer,
    classManage
});


export default reducer;