import React from "react";

export default class CartIndex extends React.Component {
    componentWillUnmount() {
        this.setState = ((state, callback) => { return; });
    }
    render() {
        return (
            <div style={{ height: "1000px" }}>
                购物车
            </div>
        )
    }
}