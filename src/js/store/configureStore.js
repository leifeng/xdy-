import { createStore, compose, combineReducers,applyMiddleware } from 'redux';
import {  routeReducer } from 'redux-simple-router'
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/index';


const rootReducer = combineReducers(Object.assign({}, reducers, {
    routing: routeReducer
}));

const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware)
)(createStore);



export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}