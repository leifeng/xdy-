import React,{Component} from 'react';
import {Provider,connect} from 'react-redux';
import { syncReduxAndRouter } from'redux-simple-router';
import {  Router ,Route, IndexRoute } from 'react-router';
import Index from '../components/index';
import Main from '../components/main';
import List from '../components/list';
import Info from '../components/info';
import Admin from '../components/admin'
import ManageClass from '../components/admin_manage_class.js';
import ManageData from '../components/admin_manage_data.js';
import configureStore from '../store/configureStore.js';




const createHistory = require('history/lib/createHashHistory');
const store = configureStore();
const history = createHistory();
syncReduxAndRouter(history, store);

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Main}>
                        <IndexRoute component={Index}/>
                        <Route path="list/:classid" component={List}/>
                        <Route path="info/:listid" component={Info}/>
                        <Route path="admin" component={Admin}>
                            <Route path="manageClass" component={ManageClass}/>
                            <Route path="ManageData" component={ManageData}/>
                        </Route>
                    </Route>
                </Router>
            </Provider>
        )
    }
}
