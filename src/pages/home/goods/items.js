import React from "react";

export default class ItemsComponent extends React.Component {
    state = {};

    componentWillReceiveProps(newProps) {
        let cid = new URLSearchParams(newProps.location.search).get('cid');
        this.setState({ cid });
    }

    render() {
        return (
            <div>
                <div>商品详情页面{this.state.cid}</div>
            </div>
        );
    }
}