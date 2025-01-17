import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Reserve from './components/Reserve/Reserve'

import * as serviceWorker from './serviceWorker';

const Root = () => (
    <Router>
        <Switch>
            <Route component={App} exact path="/" />
            <Route component={Reserve} path="/reserve" />
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
