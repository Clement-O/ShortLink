import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Third party import
import { Provider } from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {store} from './store'
import MainPage from './containers/MainPage';
// import LinkForm from './components/LinkForm'


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/demoapp' component={App} />
                <Route exact path='/' component={MainPage} /> {/* Temp, include LinkForm in a 'real' page */}
            </Switch>
        </BrowserRouter>
    </Provider>
    , 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
