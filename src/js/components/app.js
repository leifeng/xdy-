import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link,IndexRoute } from 'react-router';
import Index from './index';
import Main from './main';
import List from './list';
import Info from './info';
import Admin from './admin'
import ManageClass from './admin_manage_class.js';
import ManageData from './admin_manage_data.js';
ReactDom.render((
    <Router>
        <Route path="/" component={Main}>
            <IndexRoute component={Index}/>
            <Route path="list/:type" component={List}/>
            <Route path="info/:url" component={Info}/>
            <Route path="admin" component={Admin}>
                <Route path="manageClass" component={ManageClass}/>
                <Route path="ManageData" component={ManageData}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('root'));