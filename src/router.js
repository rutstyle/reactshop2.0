import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import asyncComponent from "./components/asyncComponent";
import config from "./assets/js/conf/config";

const HomeComponent = asyncComponent(() => import('./pages/home/home/index'));

export default class RouterComponent extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path={config.path + '/home'} component={HomeComponent}></Route>
                    <Redirect to={config.path + '/home/index'}></Redirect>
                </Switch>
            </HashRouter>
        )
    }
}