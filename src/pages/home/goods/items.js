import React from "react";

export default class ItemsComponent extends React.Component {
    componentWillReceiveProps(newProps) {
        let cid = new URLSearchParams(newProps.location.search).get('cid');
        console.log("cid", cid);
    }

    render() {
        return (
            <div>商品详情页面</div>
        );
    }
}