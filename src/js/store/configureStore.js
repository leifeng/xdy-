import { createStore, compose, combineReducers,applyMiddleware } from 'redux';
import { reduxReactRouter} from 'redux-router';
import thunkMiddleware from 'redux-thunk';
import { createHistory } from 'history';
import rootReducer from '../reducers/reducers.js';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    reduxReactRouter({
        createHistory
    })
)(createStore);


export default function configureStore() {
    return createStoreWithMiddleware(rootReducer)
}