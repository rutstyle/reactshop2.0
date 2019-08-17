import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import asyncComponent from "./components/asyncComponent";
const HomeComponent = asyncComponent(() => import('./pages/home/home/index'));

export default class RouterComponent extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={HomeComponent}></Route>
                </Switch>
            </HashRouter>
        )
    }
}