import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import asyncComponent from "../../../components/async/asyncComponent";
import CSS from "../../../assets/css/home/home/index.css";
import config from "../../../assets/js/conf/config";

const IndexComponent = asyncComponent(() => import('../index/index'));
const CartIndex = asyncComponent(() => import('../cart/index'));
const UserIndex = asyncComponent(() => import('../../user/index/index'));
console.log(CSS);

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeActive: false,
      cartActive: false,
      userActive: false
    };
  }
  componentWillMount() {
    this.handleNavStyle();
  }

  componentWillReceiveProps() {
    this.handleNavStyle();
  }

  handleNavStyle() {
    switch (this.props.history.location.pathname) {
      case config.path + "/home/index":
        this.setState({
          homeActive: true,
          cartActive: false,
          userActive: false
        });
        break;
      case config.path + "/home/cart":
        this.setState({
          homeActive: false,
          cartActive: true,
          userActive: false
        });
        break;
      case config.path + "/home/user":
        this.setState({
          homeActive: false,
          cartActive: false,
          userActive: true
        });
        break;
      default:
        break;
    }
  }

  goPage(url) {
    this.props.history.push(config.path + url);
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <Switch>
            <Route path={config.path + "/home/index"} component={IndexComponent}></Route>
            <Route path={config.path + "/home/cart"} component={CartIndex}></Route>
            <Route path={config.path + "/home/user"} component={UserIndex}></Route>
            <Redirect to={config.path + "/home/index"}></Redirect>
          </Switch>
        </React.Fragment>

        <ul className={CSS['button-nav']}>
          <li onClick={this.goPage.bind(this, '/home/index')}
            className={this.state.homeActive ? CSS.active : ''}>首页</li>
          <li onClick={this.goPage.bind(this, '/home/cart')}
            className={this.state.cartActive ? CSS.active : ''}>购物车</li>
          <li onClick={this.goPage.bind(this, '/home/user')}
            className={this.state.userActive ? CSS.active : ''}>我的</li>
        </ul>
      </div>
    )
  }
}