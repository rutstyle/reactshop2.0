import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import asyncComponent from "./components/async/asyncComponent";
import config from "./assets/js/conf/config";

const HomeComponent = asyncComponent(() => import('./pages/home/home/index'));
const ClassifyComponent = asyncComponent(() => import('./pages/home/goods/classify'));

export default class RouterComponent extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path={config.path + '/home'} component={HomeComponent}></Route>
                    <Route path={config.path + '/goods/classify'} component={ClassifyComponent}></Route>
                    <Redirect to={config.path + '/home/index'}></Redirect>
                </Switch>
            </HashRouter>
        )
    }
}