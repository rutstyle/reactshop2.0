import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import asyncComponent from "./components/asyncComponent";
// import IndexComponent from "./pages/home/index/index";
const IndexComponent = asyncComponent(() => import('./pages/home/index/index'));

export default class RouterComponent extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={IndexComponent}></Route>
                </Switch>
            </HashRouter>
        )
    }
}