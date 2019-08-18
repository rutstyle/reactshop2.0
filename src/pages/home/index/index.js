import React from "react";
import config from "../../../assets/js/conf/config";
import CSS from "../../../assets/css/home/index/index.css";

import "../../../assets/css/common/swiper.min.css";
import Swiper from "../../../assets/js/libs/swiper.min";

import { request } from "../../../assets/js/libs/request";

console.log(CSS);

export default class HomeComponent extends React.Component {
    state = {
        images: [],
        isScroll: false
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

    render() {
        return (
            <div>
                <div className={this.state.isScroll ? CSS['search-header'] + " " + CSS['red-bg'] : CSS['search-header']}>
                    <div className={CSS['search-icon']} onClick={this.navigate.bind(this, '/goods/classify')}></div>
                    <input type="text" placeholder="Search" />
                </div>
                <div className={CSS['banner']}>
                    <div class="swiper-wrapper">
                        {
                            this.state.images.map((image, index) =>
                                <div class="swiper-slide" key={index}><a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer"><img src={image.image} alt={image.title} /></a></div>
                            )
                        }

                        {/* <div class="swiper-slide"><a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer"><img src="http://vueshop.glbuys.com/uploadfiles/1484285302.jpg" alt="" /></a></div>
                        <div class="swiper-slide"><img src="http://vueshop.glbuys.com/uploadfiles/1484285302.jpg" alt="" /></div>
                        <div class="swiper-slide"><img src="http://vueshop.glbuys.com/uploadfiles/1484285302.jpg" alt="" /></div> */}
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div style={{ height: "1500px" }}>

                </div>
            </div>
        )
    }
}