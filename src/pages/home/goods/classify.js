import React from "react";
import { Switch, Route } from "react-router-dom";
import IScroll from "../../../assets/js/libs//iscroll-lite.min";
import config from "../../../assets/js/conf/config";
import Css from "../../../assets/css/home/goods/classify.css";

import ItemsComponent from "./items";

export default class ClassifyComponent extends React.Component {
    componentDidMount() {
        this.resolveScroll();
    }

    goBack() {
        this.props.history.goBack();
    }

    resolveScroll() {
        document.getElementById("scroll-classify").addEventListener("touchmove", (e) => {
            e.preventDefault();
        }, false);

        new IScroll('#scroll-classify', {
            scrollX: false,
            scrollY: true,
            preventDefault: false
        });
    }

    render() {
        return (
            <div>
                <div className={Css['search-header']}>
                    <span className={Css['icon-back']} onClick={this.goBack.bind(this)}></span>
                </div>
                <div className={Css['goods-main']}>
                    <div id="scroll-classify" className={Css['classify-wrap']}>
                        <div id="wrap">
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