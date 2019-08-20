import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
// Local import
import {store} from './store'
import MainPage from './containers/MainPage';
import LoginPage from "./containers/LoginPage";
import LogoutPage from "./containers/LogoutPage";
import UserLinkPage from "./containers/UserLinkPage";
import RedirectPage from "./containers/RedirectPage";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/logout' component={LogoutPage} />
                <Route exact path='/user' component={UserLinkPage} />
                <Route path='/:short_link' component={RedirectPage} />
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
