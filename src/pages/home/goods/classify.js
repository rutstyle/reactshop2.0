import React from "react";
import { Switch, Route } from "react-router-dom";
import IScroll from "../../../assets/js/libs//iscroll-lite.min";
import config from "../../../assets/js/conf/config";
import Css from "../../../assets/css/home/goods/classify.css";
import { request } from "../../../assets/js/libs/request";

import ItemsComponent from "./items";

export default class ClassifyComponent extends React.Component {
    myScroll = null;
    cid = null;
    state = {
        classify: []
    }

    componentDidMount() {
        this.getClassifyData();
        this.resolveScroll();
    }

    goBack() {
        this.props.history.goBack();
    }

    getClassifyData() {
        request(config.baseUrl + "/api/home/category/menu?token=1ec949a15fb709370f").then(response => {
            this.setState({ classify: response.data }, () => {
                this.myScroll.refresh();
            });
        });
    }

    resolveScroll() {
        document.getElementById("scroll-classify").addEventListener("touchmove", (e) => {
            e.preventDefault();
        }, false);

        this.myScroll = new IScroll('#scroll-classify', {
            scrollX: false,
            scrollY: true,
            preventDefault: false
        });
    }

    replaceUrl(url, cid) {
        this.cid = cid;
        this.props.history.replace(config.path + url);
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
                            {
                                this.state.classify.map((item, index) => {
                                    return (<div key={index} className={this.cid === item.cid ? Css['classify-item'] + " " + Css['active'] : Css['classify-item']} onClick={this.replaceUrl.bind(this, "/goods/classify/items?cid=" + item.cid, item.cid)}>{item.title}</div>)
                                })
                            }
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