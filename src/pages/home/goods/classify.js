import React from "react";
import { Switch, Route } from "react-router-dom";

import config from "../../../assets/js/conf/config";
import Css from "../../../assets/css/home/goods/classify.css";

import ItemsComponent from "./items";

export default class ClassifyComponent extends React.Component {
    goBack(){
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <div className={Css['search-header']}>
                    <span className={Css['icon-back']} onClick={this.goBack.bind(this)}></span>
                </div>
                <div className={Css['goods-main']}>
                    <div className={Css['classify-wrap']}>
                        <div className={Css['classify-item'] + " " + Css['active']}>潮流女装</div>

                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                        <div className={Css['classify-item']}>潮流女装</div>
                    </div>
                    <div className={Css['goods-conent']}>
                        <Switch>
                            <Route path={config.path + "/goods/classify/items"} component={ItemsComponent}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}