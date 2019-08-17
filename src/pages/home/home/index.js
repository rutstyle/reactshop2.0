import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import asyncComponent from "../../../components/asyncComponent";
import CSS from "../../../assets/css/home/index/index.css";
import config from "../../../assets/js/conf/config";
const IndexComponent = asyncComponent(() => import('../index/index'));
console.log(CSS);

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Switch>
            <Route path={config.path + "/home/index"} component={IndexComponent}></Route>
            <Redirect to={config.path + "/home/index"}></Redirect>
          </Switch>
        </React.Fragment>

        <ul className={CSS['button-nav']}>
          <li>首页</li>
          <li>购物车</li>
          <li>我的</li>
        </ul>
      </div>
    )
  }
}