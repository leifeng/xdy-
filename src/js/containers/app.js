import React,{Component} from 'react';
import {Provider,connect} from 'react-redux';
import {  Route, IndexRoute } from 'react-router';
import { ReduxRouter} from 'redux-router';
import Index from '../components/index';
import Main from '../components/main';
import List from '../components/list';
import Info from '../components/info';
import Admin from '../components/admin'
import ManageClass from '../components/admin_manage_class.js';
import ManageData from '../components/admin_manage_data.js';
import configureStore from '../store/configureStore.js';


const store = configureStore();

export  class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxRouter>
                    <Route path="/" component={Main}>
                        <IndexRoute component={Index}/>
                        <Route path="list/:type" component={List}/>
                        <Route path="info/:url" component={Info}/>
                        <Route path="admin" component={Admin}>
                            <Route path="manageClass" component={ManageClass}/>
                            <Route path="ManageData" component={ManageData}/>
                        </Route>
                    </Route>
                </ReduxRouter>
            </Provider>
        )
    }
}
