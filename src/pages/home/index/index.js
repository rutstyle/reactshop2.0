import React from "react";
import config from "../../../assets/js/conf/config";
import CSS from "../../../assets/css/home/index/index.css";

import "../../../assets/css/common/swiper.min.css";
import Swiper from "../../../assets/js/libs/swiper.min";

import { request } from "../../../assets/js/libs/request";
import SearchComponent from "../../../components/search/search";

console.log(CSS);

export default class HomeComponent extends React.Component {
    state = {
        images: [],
        isScroll: false,
        showSearchPage: false,
        pageStyle: { display: "none" },
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleWindowScroll);
    }

    componentDidMount() {
        this.getSwiper();
        window.addEventListener('scroll', this.handleWindowScroll);
    }

    handleWindowScroll = () => {
        let top = document.documentElement.scrollTop + document.body.scrollTop;
        this.setState({ isScroll: top > 182 });
    }

    getSwiper() {
        request(config.baseUrl + "/api/home/index/slide?token=1ec949a15fb709370f").then(response => {
            if (response.code === 200) {
                this.setState({ images: response.data }, () => {
                    new Swiper("." + CSS['banner'], {
                        pagination: {
                            el: '.swiper-pagination',
                        },
                        autoplay: {
                            disableOnInteraction: false,
                        },
                    })
                });
            }
        });
    }

    navigate(url) {
        this.props.history.push(config.path + url);
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
                <div className={this.state.isScroll ? CSS['search-header'] + " " + CSS['red-bg'] : CSS['search-header']}>
                    <div className={CSS['search-icon']} onClick={this.navigate.bind(this, '/goods/classify/items')}></div>
                    <input type="text" style={{ fontSize: "0.6rem" }} placeholder="Search" onClick={this.popopSearchPage.bind(this)} />
                </div>
                <div className={CSS['banner']}>
                    <div class="swiper-wrapper">
                        {
                            this.state.images.map((image, index) =>
                                <div class="swiper-slide" key={index}><a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer"><img src={image.image} alt={image.title} /></a></div>
                            )
                        }
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div style={{ height: "1500px" }}>
                </div>
                <SearchComponent pageStyle={this.state.pageStyle} childStyle={this.closeSearchPage.bind(this)}></SearchComponent>
            </div>
        )
    }
}