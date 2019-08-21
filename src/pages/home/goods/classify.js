import React from "react";
import { Switch, Route } from "react-router-dom";
import IScroll from "../../../assets/js/libs//iscroll-lite.min";
import config from "../../../assets/js/conf/config";
import Css from "../../../assets/css/home/goods/classify.css";
import { request } from "../../../assets/js/libs/request";
import SearchComponent from "../../../components/search/search";
import ItemsComponent from "./items";

export default class ClassifyComponent extends React.Component {
    myScroll = null;
    cid = null;
    state = {
        classify: [],
        pageStyle: { display: "none" },
    }

    componentDidMount() {
        this.getClassifyData();
        this.resolveScroll();
        this.cid = new URLSearchParams(this.props.location.search).get('cid') || '492';
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

        this.myScroll.on('scrollEnd', () => {
            console.log('iScroll滚动结束');
        });
    }

    replaceUrl(url, cid, index) {
        this.cid = cid;
        this.props.history.replace(config.path + url);

        let containerHeight = document.getElementById("scroll-classify").offsetHeight;
        let wrapHeight = document.getElementById("scroll-classify").scrollHeight;
        let itemHeight = this.refs["item-" + index].offsetHeight;
        let position = itemHeight * index;
        if (position > containerHeight / 3 && position + containerHeight - itemHeight < wrapHeight) {
            this.myScroll.scrollTo(0, -position, 300, IScroll.utils.ease.elastic);
        }
    }

    popopSearchPage() {
        this.setState({ showSearchPage: true });
        this.setState({ pageStyle: { display: "block" } });
    }

    closeSearchPage(val) {
        console.log(this, val);
        this.setState({ pageStyle: { display: "none" } });
    }

    render() {
        return (
            <div>
                <div className={Css['search-header']}>
                    <span className={Css['icon-back']} onClick={this.goBack.bind(this)}></span>
                    <input type="text" className={Css['search-input']} onClick={this.popopSearchPage.bind(this)} />
                </div>
                <div className={Css['goods-main']}>
                    <div id="scroll-classify" className={Css['classify-wrap']}>
                        <div id="wrap">
                            {
                                this.state.classify.map((item, index) => {
                                    return (<div ref={"item-" + index} key={index} className={this.cid === item.cid ? Css['classify-item'] + " " + Css['active'] : Css['classify-item']} onClick={this.replaceUrl.bind(this, "/goods/classify/items?cid=" + item.cid, item.cid, index)}>{item.title}</div>)
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
                <SearchComponent pageStyle={this.state.pageStyle} childStyle={this.closeSearchPage.bind(this)}></SearchComponent>
            </div>
        );
    }
}