import React from "react";
import CSS from "../../../assets/css/home/index/index.css";
console.log(CSS);

export default class IndexComponent extends React.Component {
    render() {
        return (
            <div class='app'>首页
                <div className={CSS['header']}>头部</div>
            </div>
        )
    }
}