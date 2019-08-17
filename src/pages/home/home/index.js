import React from "react";
import { Switch, Route } from "react-router-dom";
import asyncComponent from "../../../components/asyncComponent";
import CSS from "../../../assets/css/home/index/index.css";
const IndexComponent = asyncComponent(() => import('../index/index'));
console.log(CSS);

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Switch>
            <Route path="/home/index" component={IndexComponent}></Route>
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